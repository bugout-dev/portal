import Head from 'next/head'

import { Center, Flex } from '@chakra-ui/react'

import FeatureCard from '../src/components/FeatureCard'
import Layout from '../src/components/layout'
import { AWS_ASSETS_PATH } from '../src/constants'

const assets = {
  airdrop: `${AWS_ASSETS_PATH}/airdrop.png`,
  terminus: `${AWS_ASSETS_PATH}/Terminus.png`,
  games: `${AWS_ASSETS_PATH}/minigames-card.png`,
}

const features = [
  {
    name: 'Terminus',
    description: 'Manage your access lists and more',
    image: assets.terminus,
    href: '/terminus',
  },
  {
    name: 'Airdrop',
    description: 'Claim your token',
    image: assets.airdrop,
    href: '/airdrop',
  },
  {
    name: 'Garden of Forking Paths',
    description: 'Start your adventure at Garden of Forking Paths',
    image: assets.games,
    href: '/games/garden',
  },
]

export default function Home() {
  return (
    <Layout home={true}>
      <Head>
        <title>Moonstream portal</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Center>
        <Flex gap='40px' py='40px'>
          {features.map((feature) => (
            <FeatureCard feature={feature} key={feature.name} />
          ))}
        </Flex>
      </Center>
    </Layout>
  )
}
