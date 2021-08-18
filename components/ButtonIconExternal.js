import { ExternalLinkIcon } from '@heroicons/react/solid'

export default function ButtonIconExternal({ icon, text, url }) {
  return (
    <a href={url} target="_blank" className="py-2">
      <button
        type="button"
        className="w-64 text-black inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium bg-white overflow-hidden rounded-md transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-lg"
      >
        {icon}
        <span className="max-w-md">{text}</span>
        <ExternalLinkIcon
          className="text-gray-300 self-end l-0 h-5 w-5"
          aria-hidden="true"
        />
      </button>
    </a>
  );
}
