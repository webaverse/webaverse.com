import { Item, Items } from '../../types/Item'

export async function getLand(id: string): Promise<Item> {
  return fetch(`https://land.webaverse.com/${id}`).then((res) => res.json())
}

export async function getLands(): Promise<Items> {
  return fetch('https://land.webaverse.com/1-100').then((res) => res.json())
}

export async function searchLands(query: string): Promise<Items> {
  return fetch('https://land.webaverse.com/1-100')
    .then((res) => res.json())
    .then((res) =>
      res.filter((land: Item) =>
        land.name.toLowerCase().includes(query.toLowerCase()),
      ),
    )
}
