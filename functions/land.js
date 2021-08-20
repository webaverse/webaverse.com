export async function getLand(id) {
  return fetch(`https://land.webaverse.com/${id}`).then((res) => res.json())
}
