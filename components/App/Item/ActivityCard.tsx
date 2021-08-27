import { ExternalLinkIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import {
  getCreatorName,
  getCreatorProfileImage,
} from '../../../functions/helper/creator'
import { truncateEthAddress } from '../../../functions/utils'
import { ParsedLog } from '../../../types/Log'

interface Props {
  log: ParsedLog
}

export default function ButtonIconExternal({ log }: Props): JSX.Element {
  return (
    <div className="w-full text-black inline-flex items-center px-6 py-3 my-1 border border-transparent shadow-sm text-base font-medium bg-white overflow-hidden rounded-md ">
      <img
        className="inline-block self-center h-10 w-10 rounded-full"
        src={getCreatorProfileImage(log.toProfile)}
        alt=""
      />
      <div className="ml-4 mx-auto text-left flex flex-col">
        <span className="block max-w-md">
          {log.status} {log.status === 'Auction Started' ? 'by' : 'from'}{' '}
          <Link href={`/creators/${log.fromAccount}`}>
            <a>
              {log.fromProfile
                ? getCreatorName(log.fromProfile)
                : truncateEthAddress(log.fromAccount)}{' '}
            </a>
          </Link>
          {log.toAccount ? 'to' : ''}{' '}
          <Link href={`/creators/${log.toAccount}`}>
            <a>
              {log.toProfile.address !== ''
                ? getCreatorName(log.toProfile)
                : truncateEthAddress(log.toAccount)}
            </a>
          </Link>
        </span>
        <span className="block max-w-md font-light text-gray-500">
          {log.timestamp}
        </span>
      </div>
      <div className="mr-4 mx-auto text-right flex flex-col">
        {log.status !== 'Auction Started' && (
          <>
            <span className="block max-w-md">
              {log.price || ''} {log.symbol}
            </span>
            <span className="block max-w-md font-light text-gray-500">
              {log.usd_price ? '$' : ''}
              {log.usd_price
                ? parseFloat(String(Number(log.usd_price) * log.price)).toFixed(
                    2,
                  )
                : ''}
            </span>
          </>
        )}
      </div>
      <a
        target="_blank"
        href={
          log.transaction_hash
            ? `https://etherscan.io/tx/${log.transaction_hash}`
            : ''
        }
        rel="noreferrer"
      >
        <ExternalLinkIcon
          className="text-gray-300 self-center ml-auto l-0 h-5 w-5 transform transition ease-in duration-100 hover:text-black"
          aria-hidden="true"
        />
      </a>
    </div>
  )
}
