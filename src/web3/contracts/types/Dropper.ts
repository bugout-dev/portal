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
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type ClaimCreated = ContractEventLog<{
  claimId: string;
  tokenType: string;
  tokenAddress: string;
  tokenId: string;
  amount: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type ClaimSignerChanged = ContractEventLog<{
  claimId: string;
  signer: string;
  0: string;
  1: string;
}>;
export type ClaimStatusChanged = ContractEventLog<{
  claimId: string;
  status: boolean;
  0: string;
  1: boolean;
}>;
export type Claimed = ContractEventLog<{
  claimId: string;
  claimant: string;
  0: string;
  1: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type Paused = ContractEventLog<{
  account: string;
  0: string;
}>;
export type Unpaused = ContractEventLog<{
  account: string;
  0: string;
}>;
export type Withdrawal = ContractEventLog<{
  recipient: string;
  tokenType: string;
  tokenAddress: string;
  tokenId: string;
  amount: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;

export interface Dropper extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Dropper;
  clone(): Dropper;
  methods: {
    ERC1155_TYPE(): NonPayableTransactionObject<string>;

    ERC20_TYPE(): NonPayableTransactionObject<string>;

    ERC721_TYPE(): NonPayableTransactionObject<string>;

    TERMINUS_MINTABLE_TYPE(): NonPayableTransactionObject<string>;

    claim(
      claimId: number | string | BN,
      blockDeadline: number | string | BN,
      amount: number | string,
      signature: string | number[]
    ): NonPayableTransactionObject<void>;

    claimMessageHash(
      claimId: number | string | BN,
      claimant: string,
      blockDeadline: number | string | BN,
      amount: number | string | BN
    ): NonPayableTransactionObject<string>;

    claimStatus(
      claimId: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    claimUri(
      claimId: number | string | BN
    ): NonPayableTransactionObject<string>;

    createClaim(
      tokenType: number | string | BN,
      tokenAddress: string,
      tokenId: number | string | BN,
      amount: number | string | BN
    ): NonPayableTransactionObject<string>;

    getClaim(
      claimId: number | string | BN
    ): NonPayableTransactionObject<[string, string, string, string]>;

    getClaimStatus(
      claimId: number | string | BN,
      claimant: string
    ): NonPayableTransactionObject<string>;

    getSignerForClaim(
      claimId: number | string | BN
    ): NonPayableTransactionObject<string>;

    numClaims(): NonPayableTransactionObject<string>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: (number | string | BN)[],
      arg3: (number | string | BN)[],
      arg4: string | number[]
    ): NonPayableTransactionObject<string>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: number | string | BN,
      arg3: number | string | BN,
      arg4: string | number[]
    ): NonPayableTransactionObject<string>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: number | string | BN,
      data: string | number[]
    ): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    paused(): NonPayableTransactionObject<boolean>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    setClaimStatus(
      claimId: number | string | BN,
      status: boolean
    ): NonPayableTransactionObject<void>;

    setClaimUri(
      claimId: number | string | BN,
      uri: string
    ): NonPayableTransactionObject<void>;

    setSignerForClaim(
      claimId: number | string | BN,
      signer: string
    ): NonPayableTransactionObject<void>;

    supportsInterface(
      interfaceId: string | number[]
    ): NonPayableTransactionObject<boolean>;

    surrenderPoolControl(
      poolId: number | string | BN,
      terminusAddress: string,
      newPoolController: string
    ): NonPayableTransactionObject<void>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    withdrawERC1155(
      tokenAddress: string,
      tokenId: number | string | BN,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    withdrawERC20(
      tokenAddress: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    withdrawERC721(
      tokenAddress: string,
      tokenId: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    ClaimCreated(cb?: Callback<ClaimCreated>): EventEmitter;
    ClaimCreated(
      options?: EventOptions,
      cb?: Callback<ClaimCreated>
    ): EventEmitter;

    ClaimSignerChanged(cb?: Callback<ClaimSignerChanged>): EventEmitter;
    ClaimSignerChanged(
      options?: EventOptions,
      cb?: Callback<ClaimSignerChanged>
    ): EventEmitter;

    ClaimStatusChanged(cb?: Callback<ClaimStatusChanged>): EventEmitter;
    ClaimStatusChanged(
      options?: EventOptions,
      cb?: Callback<ClaimStatusChanged>
    ): EventEmitter;

    Claimed(cb?: Callback<Claimed>): EventEmitter;
    Claimed(options?: EventOptions, cb?: Callback<Claimed>): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    Paused(cb?: Callback<Paused>): EventEmitter;
    Paused(options?: EventOptions, cb?: Callback<Paused>): EventEmitter;

    Unpaused(cb?: Callback<Unpaused>): EventEmitter;
    Unpaused(options?: EventOptions, cb?: Callback<Unpaused>): EventEmitter;

    Withdrawal(cb?: Callback<Withdrawal>): EventEmitter;
    Withdrawal(options?: EventOptions, cb?: Callback<Withdrawal>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "ClaimCreated", cb: Callback<ClaimCreated>): void;
  once(
    event: "ClaimCreated",
    options: EventOptions,
    cb: Callback<ClaimCreated>
  ): void;

  once(event: "ClaimSignerChanged", cb: Callback<ClaimSignerChanged>): void;
  once(
    event: "ClaimSignerChanged",
    options: EventOptions,
    cb: Callback<ClaimSignerChanged>
  ): void;

  once(event: "ClaimStatusChanged", cb: Callback<ClaimStatusChanged>): void;
  once(
    event: "ClaimStatusChanged",
    options: EventOptions,
    cb: Callback<ClaimStatusChanged>
  ): void;

  once(event: "Claimed", cb: Callback<Claimed>): void;
  once(event: "Claimed", options: EventOptions, cb: Callback<Claimed>): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(event: "Paused", cb: Callback<Paused>): void;
  once(event: "Paused", options: EventOptions, cb: Callback<Paused>): void;

  once(event: "Unpaused", cb: Callback<Unpaused>): void;
  once(event: "Unpaused", options: EventOptions, cb: Callback<Unpaused>): void;

  once(event: "Withdrawal", cb: Callback<Withdrawal>): void;
  once(
    event: "Withdrawal",
    options: EventOptions,
    cb: Callback<Withdrawal>
  ): void;
}
