/* eslint-disable @typescript-eslint/no-var-requires */
import { useContext, useEffect, useState } from 'react'

import { useMutation, useQuery } from 'react-query'
import axios from 'axios'
import { Button, Center, Flex, Input, Spacer, Text } from '@chakra-ui/react'

import Layout from '../../src/components/layout'
import Spinner from '../../src/components/Spinner/Spinner'
import Web3Context from '../../src/contexts/Web3Context/context'
import { ENTITY_API } from '../../src/constants'
import useMoonToast from '../../src/hooks/useMoonToast'
import { useRouter } from 'next/router'
import CollectionRow from '../../src/components/CollectionRow'

const Airdrop = () => {
  const toast = useMoonToast()
  const [claimantAddress, setClaimantAddress] = useState('')
  const [claimantEmail, setClaimantEmail] = useState('')
  const [claimantDiscord, setClaimantDiscord] = useState('')
  const [eventId, setEventId] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      console.log(router.query.eventId)
      setEventId(typeof router.query.eventId === 'string' ? router.query.eventId : '')
   }
}, [router.isReady, router.query]);

  const { web3 } = useContext(Web3Context) 


  const onError = (error: {message: string}) => {
    toast(error?.message ?? 'Error', 'error', 5000)
  }

  const events = useQuery(['get-events'], () => {
    return new Promise((resolve) => {
      resolve([
        {id: '064cfd14-0b4b-4c1d-88d8-c4fee386ff35', name: 'Moonstream airdrop'},
        {id: '064cfd14-0b4b-4c1d-88d8-c4fee386ff36', name: 'Moonstream airdrop wrong'},
      ])
    })
  })

  const collectionName = useQuery(['collection-name', eventId], () => {
    return new Promise((resolve, reject) => {
      if (eventId === '064cfd14-0b4b-4c1d-88d8-c4fee386ff35') {
        resolve('Moonstream airdrop')
      } else {
        reject('Unknown Id')
      }
    })
  },
  {
    onError: (error: Error) => toast(error?.message, 'error'),
    enabled: !!eventId,
  },
  )

  const createPublicEntryMutation = useMutation(({address, email, discord}: {address: string; email: string; discord: string }) => {
    return axios.get(`${ENTITY_API}/public/collections/${eventId}/search?required_field=address:${address}`)
    .then((res) => {
      if (res.data?.total_results >= 1) {
        return new Promise((_, reject) => {
          reject(new Error('already claimed'))
        })
      }
      const data = {
        address,
        blockchain: 'polygon',
        name: 'Public claimant',
        required_fields: [{ email }, { discord }],
      }
      return axios.post(`${ENTITY_API}/public/collections/${eventId}/entities`, data)
    })
  },
  {
    onError: (error: Error) => onError(error),
    onSuccess: (data: any) => toast(`succesfully claimed for ${data?.data?.address}`, 'success', 5000),
  },)


  const handleSubmit = () => {
    if (claimantAddress === '' || claimantEmail === '' || claimantDiscord === '') {
      onError({message: 'please fill al fields'})
      return
    } 
    if (!web3.utils.isAddress(claimantAddress)) {
      onError({message: 'address is not valid'})
      return
    }
    createPublicEntryMutation.mutate({address: claimantAddress, email: claimantEmail, discord: claimantDiscord})
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <Layout home={false}>
      <Flex px='7%' gap='40px' py='40px' direction='column' justifyContent='start' h='100%'>
        <Text fontSize={['24px', '40px']} color='white' fontWeight='700'>{!eventId ? `Claims` : `Claim  - ${collectionName.data ?? ''}`}</Text>
        {eventId && (
          <Center>
            <Flex fontSize='min(18px, 9px + 0.7vw)' direction='column' color='white'>
              <Flex direction='column' p='calc(2vw)' minW='250px' gap='40px' borderRadius='10px' border='1px solid white'>
                <Flex direction='column' gap='10px'>
                  <Text>Wallet address</Text>
                  <Input     
                    variant='address'          
                    onKeyDown={handleKeyDown}
                    placeholder='wallet address'
                    type='text'
                    value={claimantAddress}
                    onChange={(e) => { 
                      setClaimantAddress(e.target.value)
                    }}
                    />
                  <Text>Email</Text>
                  <Input
                    onKeyDown={handleKeyDown}
                    variant='address'
                    placeholder='email'
                    type='email'
                    value={claimantEmail}
                    onChange={(e) => setClaimantEmail(e.target.value)}
                  />
                  <Text>Discord</Text>
                  <Input
                    onKeyDown={handleKeyDown}
                    variant='address'
                    placeholder='discord account'
                    type='text'
                    value={claimantDiscord}
                    onChange={(e) => setClaimantDiscord(e.target.value)}
                  />
                </Flex>
                <Button variant='plainOrange' borderRadius='10px' minW='100%' bg='#F56646' color='white' onClick={handleSubmit}>
                  {createPublicEntryMutation.isLoading ? <Spinner h='22px' w='22px'/> : <Text>Claim</Text>}
                </Button>
              </Flex>
            </Flex>
          </Center>
        )}
        <>
        {!eventId && events.data && (
          <Flex direction='column' gap='20px'>
            {events.data.map((event) => <CollectionRow collection={event} key={event.id} />)}
          </Flex>

        )}
        </>
        <Spacer />
      </Flex>
      
    </Layout>
  )
}

export default Airdrop
