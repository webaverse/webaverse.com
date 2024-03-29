import Link from 'next/link'
import {
  getCreatorProfileImage,
  getCreatorShortName,
} from '../../../functions/helper/creator'
import {
  getItemImage,
  getItemName,
  getShortItemName,
} from '../../../functions/helper/item'
import { getFileExt } from '../../../functions/utils'
import { Item } from '../../../types/Item'
import { Creator } from '../../../types/Creator'

interface Props {
  item: Item
  href: string
  creator: Creator
}

const ItemCard = ({ item, href, creator }: Props): JSX.Element => {
  const itemImage = getItemImage(item)
  const itemImageExt = getFileExt(itemImage)

  return (
    <Link href={href}>
      <a className="group" key={`${item.hash}-${item.id}`}>
        <div
          key={`${item.hash}-${item.id}`}
          className="bg-white shadow-sm overflow-hidden rounded-md transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-lg"
        >
          <ul className="divide-y divide-gray-200">
            <li>
              <div className="w-auto h-96 min-h-full flex justify-center align-middle overflow-hidden bg-gray-200">
                {itemImageExt === 'mp4' ? (
                  <video muted loop autoPlay src={itemImage} />
                ) : (
                  <img
                    src={itemImage}
                    alt={`the item ${getItemName(item)}`}
                    // onError={addDefaultSrc}
                    className="object-cover object-center h-full w-full group-hover:opacity-75"
                  />
                )}
              </div>
            </li>
            <li className="relative px-4 py-4 sm:px-6 text-left">
              <div className="mb-8">
                <span className="text-2xl font-semibold">
                  {getShortItemName({ item, length: 20 })}
                </span>
              </div>
              <Link href={`/creators/${creator.address}`}>
                <a>
                  <div className="flex">
                    <span className="h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                      <img
                        className="object-cover h-8 w-8 rounded-full"
                        src={getCreatorProfileImage(creator)}
                        alt="Creator profile"
                      />
                    </span>
                    <div className="flex items-center">
                      <span className="pl-2 text-md text-gray-500">
                        {getCreatorShortName({ creator, length: 17 })}
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </a>
    </Link>
  )
}

export default ItemCard
