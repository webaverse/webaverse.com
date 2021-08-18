import Link from 'next/link'
import { truncateEthAddress } from '../functions/utils'

const CreatorSearchResult = ({ creator }) => (
    <Link href={`/creators/${creator.address}`}>
        <a className="flex min-w-full h-full px-6 py-4">
            <img
              className="inline-block h-10 w-10 rounded-full"
              src={
          creator.avatarPreview
          || 'https://preview.exokit.org/[https://avatar-models.exokit.org/model49.vrm]/preview.jpg'
        }
              alt=""
            />
            <div className="ml-4 flex flex-col">
                <span className="text-xl font-semibold">{creator.name}</span>
                <span className="text-gray-300 text-sm">
                    {truncateEthAddress(creator.address)}
                </span>
            </div>
        </a>
    </Link>
)

export default CreatorSearchResult
