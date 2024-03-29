import { GetServerSideProps } from 'next'
import { EyeIcon, CubeIcon } from '@heroicons/react/solid'
import ItemHeader from '../../components/App/Item/ItemHeader'
import SEO from '../../components/Shared/SEO'
import { getCreator } from '../../functions/api/creator'
import { getItem } from '../../functions/api/item'
import ButtonIconExternal from '../../components/App/Creator/ButtonIconExternal'
import {
  getItemDescription,
  getItemName,
  getItemPreviewImage,
} from '../../functions/helper/item'
import { Item } from '../../types/Item'
import { Creator } from '../../types/Creator'

interface Props {
  item: Item
  creator: Creator
}

export default function ItemPage({ item, creator }: Props): JSX.Element {
  return (
    <div>
      <SEO
        title={getItemName(item)}
        description={getItemDescription(item)}
        image={getItemPreviewImage(item)}
      />
      <ItemHeader item={item} creator={creator} />
      <div className="px-6">
        <h1 className="text-4xl py-8 font-bold">{item.name || 'Untitled'}</h1>
        {item.description && (
          <div className="py-4">
            <h2 className="text-lg py-2 font-semibold">Description</h2>
            <p className="text-lg max-w-sm">{item.description}</p>
          </div>
        )}
        <div className="py-4">
          <h2 className="text-lg py-2 font-semibold">Edition Of</h2>
          <p className="text-5xl font-bold">{item.totalSupply}</p>
        </div>
        <div className="py-4">
          <h2 className="text-lg py-2 font-semibold">File Type</h2>
          <p className="uppercase">{item.properties.ext}</p>
        </div>
        <div className="py-4 flex flex-col">
          <ButtonIconExternal
            icon={<EyeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />}
            text="View on IPFS"
            url={`https://ipfs.infura.io/ipfs/${item.properties.hash}`}
          />
          <ButtonIconExternal
            icon={
              <CubeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
            }
            text="View Metadata"
            url={`https://tokens.webaverse.com/${item.id}`}
          />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query

  const item = await getItem(id as string)
  const creator = await getCreator(item.currentOwnerAddress)

  return {
    props: {
      item,
      creator,
    },
  }
}
