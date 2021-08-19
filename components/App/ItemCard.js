import Link from 'next/link'
import { truncateString, replaceIpfs } from '../../functions/utils'

const ItemCard = ({ item, land }) => (
  <Link href={`/${land ? 'lands' : 'items'}/${item.id}`}>
    <a className="group" key={`${item.hash}-${item.id}`}>
      <div
        key={`${item.hash}-${item.id}`}
        className="bg-white shadow-sm overflow-hidden rounded-md transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-lg"
      >
        <ul className="divide-y divide-gray-200">
          <li>
            <div className="w-auto h-96 min-h-full flex justify-center align-middle overflow-hidden bg-gray-200">
              <img
                src={replaceIpfs(item.image) || replaceIpfs(item.animation_url)}
                alt={`the item ${item.name || 'Untitled'}`}
                // onError={addDefaultSrc}
                className="object-cover object-center h-full w-full group-hover:opacity-75"
              />
            </div>
          </li>
          <li className="relative px-4 py-4 sm:px-6 text-left">
            <div className="mb-8">
              <span className="text-2xl font-semibold">
                {truncateString(item.name, 20) || 'Untitled'}
              </span>
            </div>
            <Link href={`/creators/${item.owner?.address || ''}`}>
              <a>
                <div className="flex">
                  <span className="h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                    {item.owner?.avatarPreview ? (
                      <img
                        className="object-cover h-8 w-8 rounded-full"
                        src={item.owner.avatarPreview}
                        alt=""
                      />
                    ) : (
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                  </span>
                  <div className="flex items-center">
                    <span className="pl-2 text-md text-gray-500">
                      {truncateString(item.owner?.username, 17) || 'Anonymous'}
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

export default ItemCard
