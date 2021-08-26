import type { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { address } = req.query

  if (address) {
    try {
      const creator = await fetch(
        `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&owner=${address}`,
      ).then((data) => data.json())

      if (creator.assets?.length > 0) {
        res.status(200).json(creator.assets)
      } else {
        res.status(500).json({ error: 'profile not found' })
      }
    } catch (e) {
      res.status(500).json(e)
    }
  }
}