import Link from 'next/link'
import { getCreatorName } from '../../functions/helper/creator'
import { getItemImage, getItemName } from '../../functions/helper/item'
import { Item } from '../../types/Item'

interface Props {
  item: Item
  isLandItem: boolean
}

const ItemSearchResult = ({ item, isLandItem }: Props): JSX.Element => (
  <Link href={`/${isLandItem ? 'lands' : 'items'}/${item.id}`}>
    <a className="flex w-full h-full px-6 py-4">
      <div className="inline-block h-10 w-10 rounded-full overflow-hidden pointer-events-none">
        <img
          className="object-cover pointer-events-none"
          src={getItemImage(item)}
          alt=""
        />
      </div>
      <div className="ml-4 flex flex-col pointer-events-none">
        <span className="text-xl font-semibold pointer-events-none">
          {getItemName(item)}
        </span>
        <span className="text-gray-300 text-sm pointer-events-none">
          {getCreatorName(item.owner)}
        </span>
      </div>
    </a>
  </Link>
)

export default ItemSearchResult
