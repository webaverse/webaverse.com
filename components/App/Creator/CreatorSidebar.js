import {
  getCreatorName,
  getCreatorBio,
  getCreatorWebsite,
} from '../../../functions/creator'
import CopyAddress from './CopyAddress'

export default function CreatorHeader({ creator }) {
  return (
    <div className="px-6 py-2 w-80">
      <CopyAddress address={creator.address} />
      <span className="py-4 block text-2xl font-semibold">
        {getCreatorName(creator)}
      </span>
      <span className="py-4 block text-md">{getCreatorBio(creator)}</span>
      <span className="py-4 block text-md">{getCreatorWebsite(creator)}</span>
    </div>
  )
}
