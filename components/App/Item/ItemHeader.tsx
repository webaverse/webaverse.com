import Link from 'next/link'
import {
  getCreatorProfileImage,
  getCreatorShortName,
} from '../../../functions/helper/creator'
import { getItemImage, getItemName } from '../../../functions/helper/item'
import { getFileExt } from '../../../functions/utils'
import type { Item } from '../../../types/Item'
import type { Creator } from '../../../types/Creator'

interface Props {
  item: Item
  creator: Creator
}

export default function ItemHeader({ item, creator }: Props): JSX.Element {
  const itemImage = getItemImage(item)
  const itemImageExt = getFileExt(itemImage)

  return (
    <>
      <div className="shadow-inner bg-gray-300 relative lg:absolute top-0 left-0 w-full h-815 px-14 py-24">
        <div className="mx-auto max-w-lg h-full max-h-full py-24 overflow-hidden">
          {itemImageExt === 'mp4' ? (
            <video
              muted
              autoPlay
              loop
              src={itemImage}
              className="object-contain w-full h-full"
            />
          ) : (
            <img
              src={itemImage}
              alt={`the item ${getItemName(item)}`}
              // onError={addDefaultSrc}
              className="object-contain w-full h-full"
            />
          )}
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
                    src={getCreatorProfileImage(creator)}
                    alt=""
                  />
                  <div className="pl-2 flex flex-col justify-center">
                    <span className="font-semibold">
                      {getCreatorShortName({ creator, length: 12 })}
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
