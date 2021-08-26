import { webaverseTokensEndpoint } from '../../constants/webaverse'
import { Items, Item } from '../../types/Item'

export async function searchItems(query: string): Promise<Items> {
  return fetch(`${webaverseTokensEndpoint}/search?q=${query}`).then((res) =>
    res.json(),
  )
}

export async function getItem(id: string): Promise<Item> {
  return fetch(`${webaverseTokensEndpoint}/${id}`).then((res) => res.json())
}

export async function getItems(pageNum: number): Promise<Items> {
  return fetch(
    `${webaverseTokensEndpoint}/${1 * pageNum}-${100 * pageNum}`,
  ).then((res) => res.json())
}
