import { getEthereumNfts } from '../../../functions/api/api'

beforeEach(() => {
  fetch.resetMocks()
})

it('gets token id from opensea api call', async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      token_id: '4',
    }),
  )

  const res = await getEthereumNfts(
    '0xcaf85f3c2f9f9b3f9862a9f4c1dd14dcca438afd',
    4,
  )

  expect(res.token_id).toEqual('4')
  expect(fetch).toHaveBeenCalledTimes(1)
})
