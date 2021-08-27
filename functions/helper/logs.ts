import { InitialCreatorState } from '../../constants/creator'
import { Creator } from '../../types/Creator'
import { Log, Logs, ParsedLogs } from '../../types/Log'
import { getAllCreatorsProfiles } from '../api/profile'

const parsePrice = (log: Log) => {
  const amount = log.bid_amount || log.total_price
  const decimals = log.payment_token ? log.payment_token.decimals : 18
  const price = Number(amount) / 10 ** decimals

  return price
}

const parseTimestamp = (log: Log) => {
  const date = new Date(log.created_date)
  const timestamp = `${date
    .toDateString()
    .split(' ')
    .slice(1)
    .join(' ')} at ${date.toLocaleTimeString()}`

  return timestamp
}

const parseStatus = (log: Log) => {
  const fromAccount = log.from_account?.address || log.seller?.address || ''

  let status = ''
  switch (log.event_type) {
    case 'created':
      if (log.auction_type) {
        status = 'Auction Started'
      }
      break
    case 'successful':
      status = 'Sale'
      break
    case 'transfer':
      if (fromAccount === '0x0000000000000000000000000000000000000000') {
        status = 'Minted'
      } else {
        status = 'Transfer'
      }
      break
    default:
      status = log.event_type
  }
  return status
}

export async function parseFromProfile(log: Log): Promise<Creator> {
  const fromAccount = log.from_account?.address || log.seller?.address || ''
  if (fromAccount) {
    const fromProfileData = await getAllCreatorsProfiles(fromAccount as string)
    return fromProfileData
  }
  return InitialCreatorState
}

export async function parseToProfile(log: Log): Promise<Creator> {
  const toAccount = log.to_account?.address || log.winner_account?.address || ''

  if (toAccount) {
    const toProfileData = await getAllCreatorsProfiles(toAccount as string)
    return toProfileData
  }
  return InitialCreatorState
}

function parseToAccount(log: Log): string {
  return log.to_account?.address || log.winner_account?.address || ''
}

function parseFromAccount(log: Log): string {
  return log.from_account?.address || log.seller?.address || ''
}

export async function parseOpenSeaLogs(logs: Logs): Promise<ParsedLogs> {
  const requests = logs.map(async (log: Log) => {
    const res = {
      id: log.id,
      status: parseStatus(log),
      symbol: log.payment_token?.symbol,
      transaction_hash: log.transaction?.transaction_hash,
      usd_price: log.payment_token?.usd_price,
      time: log.created_date,
      timestamp: parseTimestamp(log),
      price: parsePrice(log),
      fromProfile: await parseFromProfile(log),
      toProfile: await parseToProfile(log),
      toAccount: parseToAccount(log),
      fromAccount: parseFromAccount(log),
    }

    return res
  })

  return Promise.all(requests)
}
