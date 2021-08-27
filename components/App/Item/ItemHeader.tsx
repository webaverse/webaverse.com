import Link from 'next/link'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { ArrowsExpandIcon } from '@heroicons/react/solid'
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
  const handle = useFullScreenHandle()

  const itemImage = getItemImage(item)
  const itemImageExt = getFileExt(itemImage)

  const is3d = (() => {
    let is3dItem = false

    if (!item?.ext) return is3dItem

    switch (item.ext) {
      case 'vrm':
        is3dItem = true
        break
      case 'glb':
        is3dItem = true
        break
      default:
        is3dItem = false
    }

    return is3dItem
  })()

  return (
    <>
      <div className="shadow-inner lg:h-815 lg:absolute inset-0 w-full bg-gray-300 overflow-hidden" />
      <div className="h-815 overflow-hidden pb-24">
        <FullScreen className="h-full" handle={handle}>
          <div className="relative w-full h-full bg-gray-300">
            <div className="mx-auto w-full max-w-4xl h-full max-h-full py-24 overflow-hidden">
              {is3d && (
                <div className="h-full w-full">
                  <iframe
                    className="w-full h-full"
                    title="item preview in Webaverse"
                    src={`https://app.webaverse.com/?t=${item.id}&h=${item.hash}&e=${item.ext}`}
                  />
                </div>
              )}
              {!is3d && itemImageExt === 'mp4' && (
                <video
                  muted
                  autoPlay
                  loop
                  src={itemImage}
                  className="object-contain w-full h-full"
                />
              )}
              {!is3d && itemImageExt !== 'mp4' && (
                <img
                  src={itemImage}
                  alt={`the item ${getItemName(item)}`}
                  // onError={addDefaultSrc}
                  className="object-contain w-full h-full"
                />
              )}
            </div>
          </div>
        </FullScreen>
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
        <div className="absolute lg:top-96 right-1/4">
          <div className="absolute top-4">
            <div className="flex align-middle items-center absolute -top-12 lg:top-96 h-14 w-14 rounded-full bg-white mx-4 shadow-sm transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-lg">
              <button
                className="w-full h-full p-3"
                type="button"
                onClick={handle.enter}
              >
                <ArrowsExpandIcon className="text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
