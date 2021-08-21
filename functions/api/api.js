export async function getEthereumNfts(address, pageNum) {
  return fetch(
    `https://webaverse.com/api/ethereum/nfts/${address}/${pageNum}`,
  ).then((res) => res.json())
}

export async function getOpenseaNfts(address) {
  return fetch(`https://webaverse.com/api/ethereum/opensea/${address}`)
    .then((res) => res.json())
    .then((res) => (res.error ? null : res))
}

export async function getOpenseaItem(contractAddress, id) {
  return fetch(
    `https://webaverse.com/api/ethereum/assets/${contractAddress}/${id}`,
  )
    .then((res) => res.json())
    .then((res) => (res.error ? null : res))
}
