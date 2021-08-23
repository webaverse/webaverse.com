import type { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { asset } = req.query
  const contractAddress = asset[0]
  const id = asset[1]

  if (contractAddress) {
    try {
      const creator = await fetch(
        `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&asset_contract_address=${contractAddress}&token_ids=${id}`,
      ).then((data) => data.json())

      if (creator.assets?.length > 0) {
        res.status(200).json(creator.assets[0])
      } else {
        res.status(500).json({ error: 'token not found' })
      }
    } catch (e) {
      res.status(500).json(e)
    }
  }
}
