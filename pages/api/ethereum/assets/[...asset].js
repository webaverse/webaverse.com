export default async function handler(req, res) {
  const { asset } = req.query
  const [contractAddress, id] = asset

  if (contractAddress) {
    try {
      const creator = await fetch(
        `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&asset_contract_address=${contractAddress}&token_ids=${id}`,
      )
        .then((res) => res.json())
        .then((res) => res)

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
