import { Creators, Creator } from '../../types/Creator'
import { Items } from '../../types/Item'

export async function getCreatorsItems(address: string): Promise<Items> {
  return fetch(`https://tokens.webaverse.com/${address}`).then((res) =>
    res.json(),
  )
}

export async function searchCreators(query: string): Promise<Creators> {
  return fetch('https://accounts.webaverse.com/')
    .then((res) => res.json())
    .then((res) =>
      res.filter((creator: Creator) =>
        creator.name.toLowerCase().includes(query.toLowerCase()),
      ),
    )
}

export async function getCreator(address: string): Promise<Creator> {
  return fetch(`https://accounts.webaverse.com/${address.toLowerCase()}`).then(
    (res) => res.json(),
  )
}

export async function getCreators(): Promise<Creators> {
  return fetch('https://accounts.webaverse.com/').then((res) => res.json())
}

export async function getCreatorsWithBalance(): Promise<Creators> {
  return getCreators().then((res) => res)
}
