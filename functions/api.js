export async function getCreators() {
  return fetch('https://accounts.webaverse.com/').then((res) => res.json())
}

export async function getCreatorsWithBalance() {
  return getCreators().then((res) => res)
}

export async function getBlogPosts() {
  return fetch(
    `https://webaverse.ghost.io/ghost/api/v3/content/posts/?key=${process.env.GHOST_API_KEY}`,
  ).then((res) => res.json())
}

export async function getBlogPost(slug) {
  return fetch(
    `https://webaverse.ghost.io/ghost/api/v3/content/posts/slug/${slug}/?key=${process.env.GHOST_API_KEY}`,
  )
    .then((res) => res.json())
    .then((res) => res.posts[0])
}

export async function getLands() {
  return fetch('https://land.webaverse.com/1-100').then((res) => res.json())
}

export async function getItem(id) {
  return fetch(`https://tokens.webaverse.com/${id}`).then((res) => res.json())
}

export async function getItems(pageNum) {
  return fetch(
    `https://tokens.webaverse.com/${1 * pageNum}-${100 * pageNum}`,
  ).then((res) => res.json())
}

export async function getCreatorsItems(address) {
  return fetch(`https://tokens.webaverse.com/${address}`).then((res) =>
    res.json(),
  )
}

export async function getCreator(address) {
  return fetch(`https://accounts.webaverse.com/${address.toLowerCase()}`).then(
    (res) => res.json(),
  )
}

export async function searchCreators(query) {
  return fetch('https://accounts.webaverse.com/')
    .then((res) => res.json())
    .then((res) =>
      res.filter((creator) =>
        creator.name.toLowerCase().includes(query.toLowerCase()),
      ),
    )
}

export async function searchItems(query) {
  return fetch(`https://tokens.webaverse.com/search?q=${query}`).then((res) =>
    res.json(),
  )
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
