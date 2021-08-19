import Link from 'next/link'
import {
  truncateString,
  getRandomWebaverseAvatarImage,
  getRandomWebaverseImage,
} from '../../functions/utils'

const CreatorCard = ({ creator }) => (
  <Link href={`/creators/${creator.address}`}>
    <a className="group">
      <div
        key={creator.address}
        className="bg-white shadow-sm overflow-hidden rounded-md transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-lg"
      >
        <ul className="divide-y divide-gray-200">
          <li>
            <div className="w-auto h-52 flex justify-center align-middle overflow-hidden bg-gray-200">
              <img
                src={
                  creator.homeSpacePreview !== ''
                    ? creator.homeSpacePreview
                    : getRandomWebaverseImage()
                }
                // onError={addDefaultSrc}
                className="object-cover flex-shrink-0 min-h-full min-w-full group-hover:opacity-75"
                alt="creators home space"
              />
            </div>
          </li>
          <li className="relative px-4 py-12 sm:px-6 text-left">
            <span className="absolute -top-10 left-5 h-20 w-20 rounded-full overflow-hidden bg-gray-100">
              <img
                className="h-20 w-20 rounded-full"
                src={
                  creator.avatarPreview
                    ? creator.avatarPreview
                    : getRandomWebaverseAvatarImage()
                }
                alt=""
              />
            </span>
            <span className="text-2xl font-medium">
              {truncateString(creator.name, 20) || 'Anonymous'}
            </span>
          </li>
        </ul>
      </div>
    </a>
  </Link>
)

export default CreatorCard
