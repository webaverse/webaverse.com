export async function searchItems(query) {
  return fetch(`https://tokens.webaverse.com/search?q=${query}`).then((res) =>
    res.json(),
  )
}

export async function getItem(id) {
  return fetch(`https://tokens.webaverse.com/${id}`).then((res) => res.json())
}

export async function getItems(pageNum) {
  return fetch(
    `https://tokens.webaverse.com/${1 * pageNum}-${100 * pageNum}`,
  ).then((res) => res.json())
}
