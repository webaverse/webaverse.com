import { GetServerSideProps } from 'next'
import { EyeIcon, CubeIcon } from '@heroicons/react/solid'
import ItemHeader from '../../components/App/Item/ItemHeader'
import SEO from '../../components/Shared/SEO'
import { getCreator } from '../../functions/api/creator'
import { getLand } from '../../functions/api/land'
import ButtonIconExternal from '../../components/App/Creator/ButtonIconExternal'
import {
  getItemDescription,
  getItemImage,
  getItemName,
} from '../../functions/helper/item'
import { Creator } from '../../types/Creator'
import { Item } from '../../types/Item'

interface Props {
  creator: Creator
  item: Item
}

export const ItemPage = ({ item, creator }: Props): JSX.Element => (
  <div>
    <SEO
      title={getItemName(item)}
      description={getItemDescription(item)}
      image={getItemImage(item)}
    />
    <ItemHeader item={item} creator={creator} />
    <div className="pt-32" />
    <div className="lg:pt-80" />
    <div className="px-6 lg:pt-80">
      <h1 className="text-4xl py-8 font-bold">{item.name || 'Untitled'}</h1>
      {item.description && (
        <div className="py-4">
          <h2 className="text-lg py-2 font-semibold">Description</h2>
          <p className="text-lg">{item.description}</p>
        </div>
      )}
      <div className="py-4">
        {/* {Object.keys(item.properties).length > 0 &&
          Object.keys(item.properties).map(
            (property: string) =>
              item.properties[property] !== '' && (
                <p className="text-md">
                  <span className="capitalize font-medium">{property}</span>
                  <span>: {item.properties[property]}</span>
                </p>
              ),
          )} */}
      </div>
      <div className="py-4 flex flex-col">
        <ButtonIconExternal
          icon={<EyeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />}
          text="Visit in Webaverse"
          url={item.external_url}
        />
        <ButtonIconExternal
          icon={<CubeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />}
          text="View Metadata"
          url={`https://tokens.webaverse.com/${item.id}`}
        />
      </div>
    </div>
  </div>
)

export default ItemPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query

  const item = await getLand(id as string)
  const creator = await getCreator(item.owner.address)

  return {
    props: {
      item,
      creator,
    },
  }
}
