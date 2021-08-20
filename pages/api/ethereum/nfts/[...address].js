import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { replaceIpfs, replaceHttp } from '../../../../functions/utils'

export default async function handler(req, res) {
  const { address } = req.query
  const [userAddress, pageNum] = address

  const NFTS_PER_PAGE = 22
  const nfts = []

  if (address) {
    const client = new ApolloClient({
      uri: 'https://api.thegraph.com/subgraphs/name/amxx/eip721-subgraph',
      cache: new InMemoryCache(),
    })

    try {
      const nftData = await client.query({
        query: gql`
            query getNfts {
              tokens(
                skip: ${pageNum * NFTS_PER_PAGE}, 
                first: ${NFTS_PER_PAGE}, 
                where: {owner: "${userAddress}"}
              ) {
                  uri
              }
            }
          `,
      })

      const requests = nftData.data.tokens?.map((token) => {
        if (token.uri) {
          return fetch(replaceHttp(replaceIpfs(token.uri)))
            .then((data) => data.json())
            .then((data) => {
              if (data.image || data.image_url || data.animation_url) {
                const replacedImage =
                  replaceIpfs(data.image) ||
                  replaceIpfs(data.image_url) ||
                  replaceIpfs(data.animation_url) ||
                  ''

                nfts.push({
                  ...data,
                  image: replacedImage,
                  animation_url: replaceIpfs(data.animation_url) || '',
                })
              } else {
                nfts.push(data)
              }
            })
            .catch((err) => err)
        }
        return null
      })

      await Promise.all(requests)
      res.status(200).json(nfts)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}
