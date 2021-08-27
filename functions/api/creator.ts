import {
  webaverseAccountsEndpoint,
  webaverseTokensEndpoint,
} from '../../constants/webaverse'
import { Creators, Creator } from '../../types/Creator'
import { Items } from '../../types/Item'

export async function getCreatorsItems(address: string): Promise<Items> {
  return fetch(`${webaverseTokensEndpoint}/${address}`).then((res) =>
    res.json(),
  )
}

export async function searchCreators(query: string): Promise<Creators> {
  return fetch(webaverseAccountsEndpoint)
    .then((res) => res.json())
    .then((res) =>
      res.filter((creator: Creator) =>
        creator.name.toLowerCase().includes(query.toLowerCase()),
      ),
    )
}

export async function getCreator(address: string): Promise<Creator> {
  return fetch(`${webaverseAccountsEndpoint}/${address?.toLowerCase()}`).then(
    (res) => res.json(),
  )
}

export async function getCreators(): Promise<Creators> {
  return fetch(webaverseAccountsEndpoint).then((res) => res.json())
}

export async function getCreatorsWithBalance(): Promise<Creators> {
  return getCreators().then((res) => res)
}
