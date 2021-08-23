import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { address } = req.query

  if (address) {
    const client = new ApolloClient({
      uri: 'https://hasura.foundation.app/v1/graphql',
      cache: new InMemoryCache(),
    })

    try {
      const creator = await client.query({
        query: gql`
        query hasuraUserProfileByPublicKey {
          user_by_pk(publicKey: "${address}") {
            firstName,
            lastName,
            bio,
            name,
            username,
            profileImageUrl,
            coverImageUrl,
            socialVerifications {
              user,
              username,
              service
            }
            links,
        
          }
        } 
          `,
      })

      if (creator.data.user_by_pk !== null) {
        res.status(200).json(creator)
      } else {
        res.status(500).json({ error: 'profile not found' })
      }
    } catch (e) {
      res.status(500).json(e)
    }
  }
}
