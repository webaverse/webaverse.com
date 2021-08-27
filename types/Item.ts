import { Creator } from './Creator'

export type Items = Item[]

export interface Item {
  name: string
  username: string
  description: string
  currentOwnerAddress: string
  ownerAddress: string
  image: string
  hash: string
  uri: string
  id: number
  token_id: string
  animation_url: string
  image_url: string
  external_url: string
  external_link: string
  token_metadata: string
  totalSupply: number
  properties: ItemProperties
  owner: Creator
  creator: Creator
  asset_contract: AssetContract
  collection: Collection
  traits: Trait[]
  last_sale: {
    transaction: {
      from_account: {
        address: string
      }
    }
  }
}

export interface Collection {
  name: string
}

export interface Trait {
  trait_type: string
  value: string
}

export interface AssetContract {
  address: string
}

export interface ItemProperties {
  ext: string
  hash: string
}

export interface ShortItemNameArgs {
  item: Item
  length: number
}
