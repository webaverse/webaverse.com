// import Ceramic from '@ceramicnetwork/http-client'
// import { IDX } from '@ceramicstudio/idx'
import { getCreator } from './creator'
import { Creator } from '../../types/Creator'

// export async function getIdxProfile(address: string): Promise<unknown> {
//   const ceramic = new Ceramic('https://gateway-clay.ceramic.network')
//   const idx = new IDX({ ceramic })
//   return idx.get('basicProfile', `${address}@eip155:1`).then((res) => res)
// }

export async function getSuperRareProfile(address: string): Promise<Creator> {
  return fetch(`https://superrare.com/api/v2/user?address=${address}`)
    .then((res) => res.json())
    .then((res) => res.result)
}

export async function getOpenSeaProfile(address: string): Promise<Creator> {
  return fetch(`https://api.opensea.io/api/v1/account/${address}`)
    .then((res) => res.json())
    .then((res) => res.data)
}

export async function getFoundationProfile(address: string): Promise<Creator> {
  return fetch(`https://webaverse.com/api/ethereum/foundation/${address}`)
    .then((res) => res.json())
    .then((res) => (res.error ? null : res.data?.user_by_pk))
}

export async function getRaribleProfile(address: string): Promise<Creator> {
  return fetch(`https://webaverse.com/api/ethereum/rarible/${address}`)
    .then((res) => res.json())
    .then((res) => (res.error ? null : res))
}

export async function getAllCreatorsProfiles(
  address: string,
): Promise<Creator> {
  return Promise.all([
    getOpenSeaProfile(address),
    getSuperRareProfile(address),
    getFoundationProfile(address),
    getRaribleProfile(address),
    // getIdxProfile(address),
    getCreator(address),
  ]).then(([openSea, superRare, foundation, rarible, webaverse]) => ({
    ...openSea,
    ...superRare,
    ...foundation,
    ...rarible,
    // ...idx,
    ...webaverse,
  }))
}
