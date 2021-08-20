import { EyeIcon, CubeIcon } from '@heroicons/react/solid'
import ItemHeader from '../../components/App/Item/ItemHeader'
import SEO from '../../components/Shared/SEO'
import { getOpenseaItem, getAllCreatorsProfiles } from '../../functions/api'
import ButtonIconExternal from '../../components/App/Creator/ButtonIconExternal'
import {
  getItemDescription,
  getItemName,
  getItemImage,
} from '../../functions/item'
import ItemActivity from '../../components/App/Item/ItemActivity'

export default function Item({ item, creator }) {
  return (
    <div>
      <SEO
        title={`#${item.id} - ${getItemName(item)}`}
        description={`See ${getItemName(item)} in Webaverse.`}
        image={getItemImage(item)}
      />
      <ItemHeader item={item} creator={creator} />
      <div className="pt-32" />
      <div className="lg:pt-80" />
      <div className="flex lg:pt-80">
        <div className="flex-shrink flex flex-col px-6">
          <h1 className="text-4xl py-8 font-bold">{getItemName(item)}</h1>
          {item.description && (
            <div className="py-4">
              <h2 className="text-lg py-2 font-semibold">Description</h2>
              <p className="text-md">{getItemDescription(item)}</p>
            </div>
          )}
          <div className="py-4">
            <h2 className="text-lg py-2 font-semibold">From Collection</h2>
            <p className="text-md">{item.collection.name}</p>
          </div>
          <div className="py-4">
            {item.traits.length > 0 && (
              <h2 className="text-lg py-2 font-semibold">Traits</h2>
            )}
            {item.traits.length > 0 &&
              item.traits.map((trait) => (
                <p className="text-md">
                  <span className="font-bold">{trait.trait_type}</span>
                  <span> - {trait.value}</span>
                </p>
              ))}
          </div>
          <div className="py-4 flex flex-col">
            {item.external_link && (
              <ButtonIconExternal
                icon={
                  <EyeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                }
                text="View External"
                url={item.external_link}
              />
            )}
            {item.token_metadata && (
              <ButtonIconExternal
                icon={
                  <CubeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                }
                text="View Metadata"
                url={item.token_metadata}
              />
            )}
          </div>
        </div>
        <ItemActivity />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { asset } = context.query
  const [contractAddress, id] = asset

  const item = await getOpenseaItem(contractAddress, id)
  const address =
    item.owner?.user?.username === 'NullAddress'
      ? item.creator?.address
      : item.owner?.address
  const creator = await getAllCreatorsProfiles(address)

  return {
    props: {
      item,
      creator,
    },
  }
}
