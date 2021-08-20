import ItemSearchResult from './ItemSearchResult'
import CreatorSearchResult from './CreatorSearchResult'

const SearchResults = ({ creators, items, lands }) => (
  <div
    className="px-4 py-4 absolute top-14 h-auto w-full bg-white mt-1 shadow rounded-lg flex"
    aria-hidden
  >
    <div className="w-full" onClick={(e) => e.target.blur()}>
      {creators.length > 0 && (
        <span className="my-4 text-gray-500 text-xl font-semibold">
          Creators
        </span>
      )}
      <ul>
        {creators &&
          creators.map((creator) => (
            <li key={creator.address} className="hover:bg-gray-100 rounded-lg">
              <CreatorSearchResult creator={creator} />
            </li>
          ))}
      </ul>
      {items.length > 0 && (
        <span className="my-4 text-gray-500 text-xl font-semibold">Items</span>
      )}
      <ul>
        {items &&
          items.map((item) => (
            <li
              key={`${item.id}-${item.hash}`}
              className="hover:bg-gray-100 rounded-lg"
            >
              <ItemSearchResult item={item} />
            </li>
          ))}
      </ul>
      {lands.length > 0 && (
        <span className="my-4 text-gray-500 text-xl font-semibold">Lands</span>
      )}
      <ul>
        {lands &&
          lands.map((land) => (
            <li
              key={`${land.id}`}
              className="flex hover:bg-gray-100 rounded-lg"
            >
              <ItemSearchResult item={land} land />
            </li>
          ))}
      </ul>
    </div>
  </div>
)

export default SearchResults
