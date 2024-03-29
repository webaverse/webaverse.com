import { webaverseLandEndpoint } from '../../constants/webaverse'
import { Item, Items } from '../../types/Item'

export async function getLand(id: string): Promise<Item> {
  return fetch(`${webaverseLandEndpoint}/${id}`)
    .then((res) => res.json())
    .then((res) => (res.error ? null : res))
}

export async function getLands(): Promise<Items> {
  return fetch(`${webaverseLandEndpoint}/1-100`)
    .then((res) => res.json())
    .then((res) => (res.error ? [] : res))
}

export async function searchLands(query: string): Promise<Items> {
  return fetch(`${webaverseLandEndpoint}/1-100`)
    .then((res) => res.json())
    .then((res) =>
      res.length > 0
        ? res.filter((land: Item) =>
            land.name.toLowerCase().includes(query.toLowerCase()),
          )
        : res,
    )
    .then((res) => (res.error ? [] : res))
}
