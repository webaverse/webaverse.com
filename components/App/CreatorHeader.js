import {
  getRandomWebaverseImage,
  getRandomWebaverseAvatarImage,
} from '../../functions/utils'

export default function CreatorHeader({ creator }) {
  return (
      <>
          <div className="relative lg:absolute top-0 left-0 h-72 opacity-60 w-full overflow-hidden">
              <img
                className="object-cover object-center w-full h-full"
                src={
            creator.homeSpacePreview
              ? creator.homeSpacePreview
              : getRandomWebaverseImage()
          }
              />
          </div>
          <div className="relative">
              <div className="flex align-middle items-center absolute -top-32 lg:top-20 h-44 w-44 rounded-full bg-white mx-4">
                  <div className="flex flex-col items-center w-full">
                      <img
                        className="h-40 w-40 rounded-full"
                        src={
                creator.avatarPreview
                  ? creator.avatarPreview
                  : getRandomWebaverseAvatarImage()
              }
                        alt=""
                      />
                  </div>
              </div>
          </div>
      </>
  )
}
