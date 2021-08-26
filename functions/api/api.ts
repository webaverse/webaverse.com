import { Items, Item } from '../../types/Item'

interface EthereumNftProps {
  address: string
  pageNum: number
}

export async function getEthereumNfts({
  address,
  pageNum,
}: EthereumNftProps): Promise<Items> {
  return fetch(
    `https://webaverse.com/api/ethereum/nfts/${address}/${pageNum}`,
  ).then((res) => res.json())
}

export async function getOpenseaNfts(address: string): Promise<Items> {
  return fetch(`https://webaverse.com/api/ethereum/opensea/${address}`)
    .then((res) => res.json())
    .then((res) => (res.error ? null : res))
}

interface OpenSeaItemProps {
  contractAddress: string
  id: string
}

export async function getOpenseaItem({
  contractAddress,
  id,
}: OpenSeaItemProps): Promise<Item> {
  return fetch(
    `https://webaverse.com/api/ethereum/assets/${contractAddress}/${id}`,
  )
    .then((res) => res.json())
    .then((res) => (res.error ? null : res))
}