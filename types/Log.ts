import { Creator } from './Creator'

export type Logs = Log[]

export type ParsedLogs = ParsedLog[]

export interface ParsedLog {
  id: number
  status: string
  symbol: string
  transaction_hash: string
  usd_price: string
  time: string
  timestamp: string
  price: number
  fromProfile: Creator
  toProfile: Creator
  toAccount: string
  fromAccount: string
}

export interface Log {
  auction_type: string | null
  bid_amount: number | null
  starting_price: number | null
  total_price: number | null
  id: number
  created_date: string
  event_type: string
  payment_token: {
    decimals: number
    symbol: string
    usd_price: string
  }
  from_account: {
    address: string
  }
  to_account: null | {
    address: string
  }
  winner_account: null | {
    address: string
  }
  seller: null | {
    address: string
  }
  transaction: {
    transaction_hash: string
  }
}
