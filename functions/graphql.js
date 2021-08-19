export async function getNfts(
  address,
  pageNum,
  setNfts,
  setPageNum,
  setHasMore,
) {
  if (!address) return []

  const fetchUrl = setNfts ? 'http://localhost:3000' : 'https://0xitem.com'

  const nftData = await fetch(
    `${fetchUrl}/api/ethereum/nfts/${address}/${pageNum}`,
  )
    .then((res) => res.json())
    .catch((e) => e)

  if (setNfts && nftData?.length > 0) {
    setNfts((nfts) => [...nfts, ...nftData])
    setPageNum((currentPageNum) => currentPageNum + 1)
  } else if (setHasMore && nftData?.length === 0) {
    setHasMore(false)
  }

  return nftData
}
