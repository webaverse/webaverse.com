import { GetServerSideProps } from 'next'
import { EyeIcon, CubeIcon } from '@heroicons/react/solid'
import ItemHeader from '../../components/App/Item/ItemHeader'
import SEO from '../../components/Shared/SEO'
import { getAllCreatorsProfiles } from '../../functions/api/profile'
import { getNftLogs, getOpenseaItem } from '../../functions/api/api'
import ButtonIconExternal from '../../components/App/Creator/ButtonIconExternal'
import {
  getItemDescription,
  getItemName,
  getItemPreviewImage,
} from '../../functions/helper/item'
import ItemActivity from '../../components/App/Item/ItemActivity'
import { Item, Trait } from '../../types/Item'
import { Creator } from '../../types/Creator'
import { ParsedLogs } from '../../types/Log'

interface Props {
  item: Item
  creator: Creator
  logs: ParsedLogs
}

export default function AssetPage({ item, creator, logs }: Props): JSX.Element {
  return (
    <div>
      <SEO
        title={getItemName(item)}
        description={getItemDescription(item)}
        image={getItemPreviewImage(item)}
      />
      <ItemHeader item={item} creator={creator} />
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full flex flex-col px-6">
          <h1 className="text-4xl py-8 font-bold">{getItemName(item)}</h1>
          {item.description && (
            <div className="py-4">
              <h2 className="text-lg py-2 font-semibold">Description</h2>
              <p className="text-md max-w-sm">{getItemDescription(item)}</p>
            </div>
          )}
          <div className="py-4">
            <h2 className="text-lg py-2 font-semibold">From Collection</h2>
            <p className="text-md">{item.collection.name}</p>
          </div>
          <div className="py-4 ">
            {item.traits.length > 0 && (
              <h2 className="text-lg py-2 font-semibold">Traits</h2>
            )}
            {item.traits.length > 0 &&
              item.traits.map((trait: Trait) => (
                <div className="text-md max-w-sm whitespace-normal break-all">
                  <span className="font-medium">{trait.trait_type}: </span>
                  <span className="inline-block">{trait.value}</span>
                </div>
              ))}
          </div>
          <div className="py-4 flex flex-col">
            <ButtonIconExternal
              icon={
                <svg
                  className="-ml-1 mr-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.364 9.999a.89.89 0 01.895-.89l1.482.004a.891.891 0 01.891.892v5.607c.167-.05.381-.102.616-.157a.743.743 0 00.572-.723V7.776a.892.892 0 01.892-.892h1.485a.891.891 0 01.891.892v6.456s.372-.15.734-.304a.744.744 0 00.454-.685V5.547a.891.891 0 01.892-.891h1.485a.891.891 0 01.891.891v6.337c1.288-.933 2.593-2.056 3.628-3.406A1.496 1.496 0 0020.4 7.08 10.483 10.483 0 0010.632 0C4.811-.077 0 4.677 0 10.501a10.47 10.47 0 001.394 5.252 1.327 1.327 0 001.266.656c.28-.024.63-.06 1.046-.108a.742.742 0 00.659-.737V9.999M4.332 18.991a10.493 10.493 0 0016.641-9.21c-3.834 5.721-10.915 8.396-16.64 9.21"
                    fill="#1A1A1A"
                  />
                </svg>
              }
              text="View on Etherscan"
              url={`https://etherscan.io/token/${item.asset_contract.address}?a=${item.token_id}`}
            />
            {(item.external_link ?? item.external_url) && (
              <ButtonIconExternal
                icon={
                  <EyeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                }
                text="View External"
                url={item.external_link ?? item.external_url}
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
        <ItemActivity logs={logs} />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { asset } = context.query

  const item = await getOpenseaItem({
    contractAddress: asset?.[0] || '',
    id: asset?.[1] || '',
  })

  const address =
    item?.owner?.user?.username === 'NullAddress'
      ? item?.last_sale?.transaction?.from_account?.address
      : item?.owner?.address

  const creator = await getAllCreatorsProfiles(address as string)
  const logs = await getNftLogs({
    contractAddress: asset?.[0] || '',
    id: asset?.[1] || '',
  })

  return {
    props: {
      item,
      creator,
      logs,
    },
  }
}
