import Link from 'next/link'

import {
  getRandomWebaverseAvatarImage,
  truncateString,
} from '../../functions/utils'

export default function ItemHeader({ item, creator }) {
  return (
    <>
      <div className="shadow-inner bg-gray-300 relative lg:absolute top-0 left-0 w-full px-14 py-14">
        <div className="mx-auto max-w-lg h-auto py-24">
          <img
            alt={`the header for the item ${item.name || 'Untitled'}`}
            className="object-contain w-full h-full"
            src={
              // !!item.animation_url
              //   ? item.animation_url
              // :
              item.image
            }
          />
        </div>
      </div>
      <div className="absolute lg:top-96">
        <div className="absolute top-4">
          <Link href={`/creators/${creator.address}`}>
            <a>
              <div className="flex align-middle items-center absolute -top-12 lg:top-96 h-14 w-44 rounded-full bg-white mx-4 shadow-sm transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex w-full px-2">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={
                      creator.avatarPreview
                        ? creator.avatarPreview
                        : getRandomWebaverseAvatarImage()
                    }
                    alt=""
                  />
                  <div className="pl-2 flex flex-col justify-center">
                    <span className="font-semibold">
                      {truncateString(creator.name, 12) || 'Anonymous'}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
