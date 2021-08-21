import Ceramic from '@ceramicnetwork/http-client'
import { IDX } from '@ceramicstudio/idx'
import { getCreator } from './creator'

export async function getIdxProfile(address) {
  const ceramic = new Ceramic('https://gateway-clay.ceramic.network')
  const idx = new IDX({ ceramic })
  return idx
    .get('basicProfile', `${address}@eip155:1`)
    .then((res) => res)
    .catch((e) => e)
}

export async function getOpenSeaProfile(address) {
  return fetch(`https://api.opensea.io/api/v1/account/${address}`)
    .then((res) => res.json())
    .then((res) => res.data)
}

export async function getFoundationProfile(address) {
  return fetch(`https://webaverse.com/api/ethereum/foundation/${address}`)
    .then((res) => res.json())
    .then((res) => (res.error ? null : res.data?.user_by_pk))
}

export async function getRaribleProfile(address) {
  return fetch(`https://webaverse.com/api/ethereum/rarible/${address}`)
    .then((res) => res.json())
    .then((res) => (res.error ? null : res))
}

export async function getAllCreatorsProfiles(address) {
  return Promise.all([
    getOpenSeaProfile(address),
    getFoundationProfile(address),
    getRaribleProfile(address),
    getIdxProfile(address),
    getCreator(address),
  ]).then(([openSea, foundation, rarible, idx, webaverse]) => ({
    ...openSea,
    ...foundation,
    ...rarible,
    ...idx,
    ...webaverse,
  }))
}
