import Link from 'next/link'
import { truncateEthAddress } from '../../functions/utils'
import { Creator } from '../../types/Creator'

interface Props {
  creator: Creator
}

const CreatorSearchResult = ({ creator }: Props): JSX.Element => (
  <Link href={`/creators/${creator.address}`}>
    <a className="flex min-w-full h-full px-6 py-4">
      <img
        className="inline-block h-10 w-10 rounded-full pointer-events-none"
        src={
          creator.avatarPreview ||
          'https://preview.exokit.org/[https://avatar-models.exokit.org/model49.vrm]/preview.jpg'
        }
        alt=""
      />
      <div className="ml-4 flex flex-col pointer-events-none">
        <span className="text-xl font-semibold pointer-events-none">
          {creator.name}
        </span>
        <span className="text-gray-300 text-sm pointer-events-none">
          {truncateEthAddress(creator.address)}
        </span>
      </div>
    </a>
  </Link>
)

export default CreatorSearchResult
