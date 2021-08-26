import { useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { searchCreators } from '../../functions/api/creator'
import { searchItems } from '../../functions/api/item'
import { searchLands } from '../../functions/api/land'
import SearchResults from './SearchResults'
import { Creators } from '../../types/Creator'
import { Items } from '../../types/Item'
import { useAppSelector } from '../../redux/hooks'

const SearchInput = (): JSX.Element => {
  const profile = useAppSelector((state) => state?.web3Reducer?.profile)
  const [creators, setCreators] = useState<Creators>([])
  const [items, setItems] = useState<Items>([])
  const [lands, setLands] = useState<Items>([])

  const handleSearchInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
        profile ? 'col-span-8' : 'col-span-9'
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
