import {
  getCreatorName,
  getCreatorBio,
  getCreatorWebsite,
} from '../../../functions/helper/creator'
import CopyAddress from './CopyAddress'
import { Creator } from '../../../types/Creator'

interface Props {
  creator: Creator
}

export default function CreatorHeader({ creator }: Props): JSX.Element {
  return (
    <div className="px-6 py-2 w-full lg:w-80">
      <CopyAddress address={creator.address} />
      <span className="py-4 block text-2xl font-semibold">
        {getCreatorName(creator)}
      </span>
      <span className="py-4 block text-md">{getCreatorBio(creator)}</span>
      <span className="py-4 block text-md">{getCreatorWebsite(creator)}</span>
    </div>
  )
}
