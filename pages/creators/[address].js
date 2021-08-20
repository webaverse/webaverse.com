import {
  getAllCreatorsProfiles,
  getCreatorsItems,
  getOpenseaNfts,
} from '../../functions/api'
import ItemCard from '../../components/App/Item/ItemCard'
import CreatorHeader from '../../components/App/Creator/CreatorHeader'
import CreatorSidebar from '../../components/App/Creator/CreatorSidebar'
import SEO from '../../components/Shared/SEO'
import { getCreatorName, getCreatorProfileImage } from '../../functions/creator'

export default function CreatorPage({
  creator,
  webaverseItems,
  ethereumItems,
}) {
  const name = getCreatorName(creator)

  return (
    <div className="flex-grow">
      <SEO
        title={`${name}'s account | Webaverse`}
        description={`See ${name}'s Webaverse profile.`}
        image={getCreatorProfileImage(creator)}
      />
      <CreatorHeader creator={creator} />
      <div className="pt-12 lg:pt-80 flex lg:flex-nowrap flex-wrap">
        <CreatorSidebar creator={creator} />
        <div className="flex-1">
          <div className="px-4 min-h-full w-full overflow-hidden grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {webaverseItems?.map((item) => (
              <div key={`${item.id}`}>
                <ItemCard
                  creator={creator}
                  item={item}
                  href={`/items/${item.id}`}
                />
              </div>
            ))}
            {ethereumItems?.map((item) => (
              <div key={`${item.id}`}>
                <ItemCard
                  item={item}
                  creator={creator}
                  href={`/assets/${item.asset_contract?.address}/${item.token_id}`}
                />
              </div>
            ))}

            {!webaverseItems &&
              webaverseItems.length < 1 &&
              !ethereumItems &&
              ethereumItems.length < 1 && (
                <h1 className="col-span-3 text-xl pt-4 mx-auto">
                  This user has no items.
                </h1>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { address } = context.query

  const creator = await getAllCreatorsProfiles(address)
  const webaverseItems = await getCreatorsItems(address)
  const ethereumItems = (await getOpenseaNfts(address)) || []

  return {
    props: {
      creator,
      webaverseItems,
      ethereumItems,
    },
  }
}
