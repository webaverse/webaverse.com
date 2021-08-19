import Link from 'next/link'
import { truncateEthAddress } from '../../functions/utils'

const ItemSearchResult = ({ item, land }) => (
  <Link href={`/${land ? 'lands' : 'items'}/${item.id}`}>
    <a className="flex w-full h-full px-6 py-4">
      <div className="inline-block h-10 w-10 rounded-full overflow-hidden">
        <img className="object-cover" src={item.image} alt="" />
      </div>
      <div className="ml-4 flex flex-col">
        <span className="text-xl font-semibold">{item.name}</span>
        <span className="text-gray-300 text-sm">
          {item.owner.username || truncateEthAddress(item.ownerAddress)}
        </span>
      </div>
    </a>
  </Link>
)

export default ItemSearchResult
