import type { NextApiRequest, NextApiResponse } from 'next'
import { openSeaEndpoint } from '../../../../constants/api'
import { parseOpenSeaLogs } from '../../../../functions/helper/logs'

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
        `${openSeaEndpoint}/events?asset_contract_address=${contractAddress}&token_id=${id}&only_opensea=false`,
      )
        .then((data) => data.json())
        .then(async (data) => parseOpenSeaLogs(data.asset_events))

      if (creator) {
        res.status(200).json(creator)
      } else {
        res.status(500).json({ error: 'logs not found' })
      }
    } catch (e) {
      res.status(500).json(e)
    }
  }
}
