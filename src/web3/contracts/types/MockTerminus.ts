/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from './types';

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type ApprovalForAll = ContractEventLog<{
  account: string;
  operator: string;
  approved: boolean;
  0: string;
  1: string;
  2: boolean;
}>;
export type PoolMintBatch = ContractEventLog<{
  id: string;
  operator: string;
  from: string;
  toAddresses: string[];
  amounts: string[];
  0: string;
  1: string;
  2: string;
  3: string[];
  4: string[];
}>;
export type TransferBatch = ContractEventLog<{
  operator: string;
  from: string;
  to: string;
  ids: string[];
  values: string[];
  0: string;
  1: string;
  2: string;
  3: string[];
  4: string[];
}>;
export type TransferSingle = ContractEventLog<{
  operator: string;
  from: string;
  to: string;
  id: string;
  value: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type URI = ContractEventLog<{
  value: string;
  id: string;
  0: string;
  1: string;
}>;

export interface MockTerminus extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): MockTerminus;
  clone(): MockTerminus;
  methods: {
    approveForPool(
      poolID: number | string | BN,
      operator: string
    ): NonPayableTransactionObject<void>;

    balanceOf(
      account: string,
      id: number | string | BN
    ): NonPayableTransactionObject<string>;

    balanceOfBatch(
      accounts: string[],
      ids: (number | string | BN)[]
    ): NonPayableTransactionObject<string[]>;

    burn(
      from: string,
      poolID: number | string | BN,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    contractURI(): NonPayableTransactionObject<string>;

    createPoolV1(
      _capacity: number | string | BN,
      _transferable: boolean,
      _burnable: boolean
    ): NonPayableTransactionObject<string>;

    createSimplePool(
      _capacity: number | string | BN
    ): NonPayableTransactionObject<string>;

    isApprovedForAll(
      account: string,
      operator: string
    ): NonPayableTransactionObject<boolean>;

    isApprovedForPool(
      poolID: number | string | BN,
      operator: string
    ): NonPayableTransactionObject<boolean>;

    poolIsBurnable(
      poolID: number | string | BN,
    ): NonPayableTransactionObject<boolean>;

    poolIsTransferable(
      poolID: number | string | BN,
    ): NonPayableTransactionObject<boolean>;

    mint(
      to: string,
      poolID: number | string | BN,
      amount: number | string | BN,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    mintBatch(
      to: string,
      poolIDs: (number | string | BN)[],
      amounts: (number | string | BN)[],
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    paymentToken(): NonPayableTransactionObject<string>;

    poolBasePrice(): NonPayableTransactionObject<string>;

    poolMintBatch(
      id: number | string | BN,
      toAddresses: string[],
      amounts: (number | string | BN)[]
    ): NonPayableTransactionObject<void>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: (number | string | BN)[],
      amounts: (number | string | BN)[],
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    safeTransferFrom(
      from: string,
      to: string,
      id: number | string | BN,
      amount: number | string | BN,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean
    ): NonPayableTransactionObject<void>;

    setContractURI(_contractURI: string): NonPayableTransactionObject<void>;

    setController(newController: string): NonPayableTransactionObject<void>;

    setPaymentToken(newPaymentToken: string): NonPayableTransactionObject<void>;

    setPoolBasePrice(
      newBasePrice: number | string | BN
    ): NonPayableTransactionObject<void>;

    setPoolController(
      poolID: number | string | BN,
      newController: string
    ): NonPayableTransactionObject<void>;

    setURI(
      poolID: number | string | BN,
      poolURI: string
    ): NonPayableTransactionObject<void>;

    supportsInterface(
      interfaceId: string | number[]
    ): NonPayableTransactionObject<boolean>;

    terminusController(): NonPayableTransactionObject<string>;

    terminusPoolCapacity(
      poolID: number | string | BN
    ): NonPayableTransactionObject<string>;

    terminusPoolController(
      poolID: number | string | BN
    ): NonPayableTransactionObject<string>;

    terminusPoolSupply(
      poolID: number | string | BN
    ): NonPayableTransactionObject<string>;

    totalPools(): NonPayableTransactionObject<string>;

    uri(poolID: number | string | BN): NonPayableTransactionObject<string>;

    withdrawPayments(
      toAddress: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    ApprovalForAll(cb?: Callback<ApprovalForAll>): EventEmitter;
    ApprovalForAll(
      options?: EventOptions,
      cb?: Callback<ApprovalForAll>
    ): EventEmitter;

    PoolMintBatch(cb?: Callback<PoolMintBatch>): EventEmitter;
    PoolMintBatch(
      options?: EventOptions,
      cb?: Callback<PoolMintBatch>
    ): EventEmitter;

    TransferBatch(cb?: Callback<TransferBatch>): EventEmitter;
    TransferBatch(
      options?: EventOptions,
      cb?: Callback<TransferBatch>
    ): EventEmitter;

    TransferSingle(cb?: Callback<TransferSingle>): EventEmitter;
    TransferSingle(
      options?: EventOptions,
      cb?: Callback<TransferSingle>
    ): EventEmitter;

    URI(cb?: Callback<URI>): EventEmitter;
    URI(options?: EventOptions, cb?: Callback<URI>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "ApprovalForAll", cb: Callback<ApprovalForAll>): void;
  once(
    event: "ApprovalForAll",
    options: EventOptions,
    cb: Callback<ApprovalForAll>
  ): void;

  once(event: "PoolMintBatch", cb: Callback<PoolMintBatch>): void;
  once(
    event: "PoolMintBatch",
    options: EventOptions,
    cb: Callback<PoolMintBatch>
  ): void;

  once(event: "TransferBatch", cb: Callback<TransferBatch>): void;
  once(
    event: "TransferBatch",
    options: EventOptions,
    cb: Callback<TransferBatch>
  ): void;

  once(event: "TransferSingle", cb: Callback<TransferSingle>): void;
  once(
    event: "TransferSingle",
    options: EventOptions,
    cb: Callback<TransferSingle>
  ): void;

  once(event: "URI", cb: Callback<URI>): void;
  once(event: "URI", options: EventOptions, cb: Callback<URI>): void;
}
