import { Items, Item } from '../../types/Item'

export async function searchItems(query: string): Promise<Items> {
  return fetch(`https://tokens.webaverse.com/search?q=${query}`).then((res) =>
    res.json(),
  )
}

export async function getItem(id: string): Promise<Item> {
  return fetch(`https://tokens.webaverse.com/${id}`).then((res) => res.json())
}

export async function getItems(pageNum: number): Promise<Items> {
  return fetch(
    `https://tokens.webaverse.com/${1 * pageNum}-${100 * pageNum}`,
  ).then((res) => res.json())
}
