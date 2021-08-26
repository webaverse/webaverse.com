import type { NextApiRequest, NextApiResponse } from 'next'
import { openSeaEndpoint } from '../../../../../constants/api'

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { address } = req.query

  if (address) {
    try {
      const creator = await fetch(`${openSeaEndpoint}/account/${address}`).then(
        (data) => data.json(),
      )

      res.status(200).json(creator)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}
