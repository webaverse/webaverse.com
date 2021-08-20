export default async function handler(req, res) {
  const { address } = req.query

  if (address) {
    try {
      const body = []
      body.push(address)

      const creator = await fetch(
        'https://api-mainnet.rarible.com/marketplace/api/v3/profiles/list',
        {
          method: 'POST',
          headers: {
            Accept: '*/*',
            origin: 'https://rarible.com',
            referer: 'https://rarible.com/',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        },
      ).then((res) => res.json())

      if (creator.length > 0) {
        res.status(200).json(creator[0])
      } else {
        res.status(500).json({ error: 'profile not found' })
      }
    } catch (e) {
      res.status(500).json(e)
    }
  }
}
