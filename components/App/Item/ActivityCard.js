import { ExternalLinkIcon } from '@heroicons/react/solid'
import { getRandomWebaverseAvatarImage } from '../../../functions/utils'

export default function ButtonIconExternal({ transaction }) {
  const url = ''
  const image = getRandomWebaverseAvatarImage()
  const text = 'Test'
  const timestamp = new Date().toString()

  return (
    <button
      type="button"
      className="w-full text-black inline-flex items-center px-6 py-3 my-1 border border-transparent shadow-sm text-base font-medium bg-white overflow-hidden rounded-md transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-lg"
    >
      <a
        href={url}
        target="_blank"
        className="py-2 w-full flex"
        rel="noreferrer"
      >
        <img
          className="inline-block self-center h-10 w-10 rounded-full"
          src={image}
          alt=""
        />
        <div className="mx-auto text-left flex flex-col">
          <span className="block max-w-md">{text}</span>
          <span className="block max-w-md font-light text-gray-500">
            {timestamp}
          </span>
        </div>
        <ExternalLinkIcon
          className="text-gray-300 self-center ml-auto l-0 h-5 w-5"
          aria-hidden="true"
        />
      </a>
    </button>
  )
}
