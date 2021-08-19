import CopyAddress from './CopyAddress'

export default function CreatorHeader({ creator }) {
  return (
    <div className="px-6 py-2 w-80">
      <CopyAddress address={creator.address} />
      <span className="text-2xl font-semibold">
        {creator.name || 'Anonymous'}
      </span>
    </div>
  )
}
