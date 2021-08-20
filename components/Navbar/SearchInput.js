import { useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { searchCreators, searchItems, searchLands } from '../../functions/api'
import SearchResults from './SearchResults'

const SearchInput = ({ extended }) => {
  const [creators, setCreators] = useState([])
  const [items, setItems] = useState([])
  const [lands, setLands] = useState([])

  const handleSearchInput = async (e) => {
    const query = e.target.value

    if (query.length > 0) {
      const creatorsData = await searchCreators(query)
      const itemsData = await searchItems(query)
      const landsData = await searchLands(query)

      setCreators(creatorsData.slice(0, 3))
      setItems(itemsData.slice(0, 3))
      setLands(landsData.slice(0, 3))
    } else {
      setCreators([])
      setItems([])
      setLands([])
    }
  }

  return (
    <div
      className={`group min-w-0 flex-1 md:px-8 lg:px-0 ${
        extended ? 'col-span-9' : 'col-span-7'
      }`}
    >
      <div className="flex items-center px-6 py-3 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
        <div className="w-full">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <SearchIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              name="search"
              className="shadow-sm h-14 lg:h-10 w-full bg-opacity-60 bg-white rounded-full py-4 pl-10 pr-3 text-sm placeholder-gray-500 focus:bg-white focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
              placeholder="Search Webaverse"
              type="search"
              onChange={handleSearchInput}
            />
            <div className="hidden group-focus-within:block">
              {(items.length > 0 || creators.length > 0) && (
                <SearchResults
                  creators={creators}
                  items={items}
                  lands={lands}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchInput
