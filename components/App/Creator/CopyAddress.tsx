import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/solid'
import { truncateEthAddress } from '../../../functions/utils'

interface Props {
  address: string
}

export default function CopyAddress({ address }: Props): JSX.Element {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="mb-8">
      <section className="bg-white w-44 rounded-full px-4 py-2 has-tooltip shadow-lg text-left">
        <div className="w-full flex">
          <p className="font-mono" title={address}>
            {truncateEthAddress(address)}
          </p>
          <div
            aria-hidden
            className="group relative ml-auto flex"
            onClick={handleCopy}
          >
            {!copied ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block text-gray-500 transition ease-in duration-100 hover:text-black mr-1 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <div className="transition ease-in duration-100 opacity-0 group-hover:opacity-100 absolute -top-16 -left-14 py-2 px-6 text-center bg-black text-white w-40 rounded-full">
                  <div className="font-bold">Copy Address</div>
                </div>
              </>
            ) : (
              <CheckIcon
                className="h-6 w-666666 text-green-500"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
