export async function getLand(id) {
  return fetch(`https://land.webaverse.com/${id}`).then((res) => res.json())
}

export async function getLands() {
  return fetch('https://land.webaverse.com/1-100').then((res) => res.json())
}

export async function searchLands(query) {
  return fetch('https://land.webaverse.com/1-100')
    .then((res) => res.json())
    .then((res) =>
      res.filter((land) =>
        land.name.toLowerCase().includes(query.toLowerCase()),
      ),
    )
}
