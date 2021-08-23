import {
  getCreatorProfileImage,
  getCreatorHomeSpaceImage,
} from '../../../functions/helper/creator'
// import { addDefaultSrc } from '../../../functions/utils'
import { Creator } from '../../../types/Creator'

interface Props {
  creator: Creator
}

export default function CreatorHeader({ creator }: Props): JSX.Element {
  return (
    <>
      <div className="relative lg:absolute top-0 left-0 h-72 opacity-60 w-full overflow-hidden">
        <img
          alt="Creator&lsquo;s home space"
          className="object-cover object-center w-full h-full"
          src={getCreatorHomeSpaceImage(creator)}
          // onError={addDefaultSrc}
        />
      </div>
      <div className="relative">
        <div className="flex align-middle items-center absolute -top-32 lg:top-20 h-44 w-44 rounded-full bg-white mx-4">
          <div className="flex flex-col items-center w-full">
            <img
              className="h-40 w-40 rounded-full"
              src={getCreatorProfileImage(creator)}
              alt="creator profile"
              // onError={addDefaultSrc}
            />
          </div>
        </div>
      </div>
    </>
  )
}
