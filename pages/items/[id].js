import { EyeIcon, CubeIcon } from '@heroicons/react/solid'
import ItemHeader from '../../components/App/ItemHeader'
import SEO from '../../components/Shared/SEO'
import { getItem, getCreator } from '../../functions/api'
import ButtonIconExternal from '../../components/App/Creator/ButtonIconExternal'

export default function Item({ item, creator }) {
  return (
    <div>
      <SEO
        title={`#${item.id} - ${item.name || 'Untitled'}`}
        description={`See ${item.name || 'Untitled'} in Webaverse.`}
        image={item.image}
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
          <h2 className="text-lg py-2 font-semibold">Edition Of</h2>
          <p className="text-5xl font-bold">{item.totalSupply}</p>
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

export async function getServerSideProps(context) {
  const { id } = context.query

  const item = await getItem(id)
  const creator = await getCreator(item.currentOwnerAddress)

  return {
    props: {
      item,
      creator,
    },
  }
}
