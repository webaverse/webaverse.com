import { ExternalLinkIcon } from '@heroicons/react/solid'

interface Props {
  icon: JSX.Element
  text: string
  url: string
}

export default function ButtonIconExternal({
  icon,
  text,
  url,
}: Props): JSX.Element {
  return (
    <button
      type="button"
      className="w-80 text-black inline-flex items-center px-6 py-3 my-1 border border-transparent shadow-sm text-base font-medium bg-white overflow-hidden rounded-md transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-lg"
    >
      <a
        href={url}
        target="_blank"
        className="py-2 w-full flex"
        rel="noreferrer"
      >
        {icon}
        <span className="max-w-md">{text}</span>
        <ExternalLinkIcon
          className="text-gray-300 ml-auto self-end l-0 h-5 w-5"
          aria-hidden="true"
        />
      </a>
    </button>
  )
}
