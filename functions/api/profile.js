import { getCreator } from './creator'

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
  // const openSeaName = await getOpenSeaProfile(address)
  // const foundationProfile = await getFoundationProfile(address)
  // const raribleProfile = await getRaribleProfile(address)
  // const webaverseProfile = await getCreator(address)

  // return {
  //   ...webaverseProfile,
  //   ...openSeaName,
  //   ...foundationProfile,
  //   ...raribleProfile,
  // }

  return Promise.all([
    getOpenSeaProfile(address),
    getFoundationProfile(address),
    getRaribleProfile(address),
    getCreator(address),
  ]).then((res) => [...res])
}
