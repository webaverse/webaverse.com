import type { NextApiRequest, NextApiResponse } from 'next'
import { openSeaEndpoint } from '../../../../constants/api'
import { parseOpenSeaLogs } from '../../../../functions/helper/logs'
import { ParsedLog, Logs } from '../../../../types/Log'

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { asset } = req.query
  const contractAddress = asset[0]
  const id = asset[1]

  if (contractAddress) {
    try {
      const urls = [
        `${openSeaEndpoint}/events?asset_contract_address=${contractAddress}&token_id=${id}&only_opensea=false&limit=50&event_type=transfer`,
        `${openSeaEndpoint}/events?asset_contract_address=${contractAddress}&token_id=${id}&only_opensea=false&limit=50&event_type=successful`,
        // `${openSeaEndpoint}/events?asset_contract_address=${contractAddress}&token_id=${id}&only_opensea=false&limit=50&event_type=created`,
        `${openSeaEndpoint}/events?asset_contract_address=${contractAddress}&token_id=${id}&only_opensea=false&limit=50&event_type=approve`,
      ]

      const resultsArray: Logs = []
      const promises = urls.map((url) =>
        fetch(url)
          .then((data) => data.json())
          .then((data) => resultsArray.push(...data.asset_events)),
      )
      await Promise.all(promises)

      const parsedResults = await parseOpenSeaLogs(resultsArray)
      const sortedParsedResults = parsedResults.sort(
        (a: ParsedLog, b: ParsedLog) =>
          new Date(b.time).getTime() - new Date(a.time).getTime(),
      )

      if (sortedParsedResults) {
        res.status(200).json(sortedParsedResults)
      } else {
        res.status(500).json({ error: 'logs not found' })
      }
    } catch (e) {
      res.status(500).json(e)
    }
  }
}
