export async function getCreatorsItems(address) {
  return fetch(`https://tokens.webaverse.com/${address}`).then((res) =>
    res.json(),
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

export async function getCreator(address) {
  return fetch(`https://accounts.webaverse.com/${address.toLowerCase()}`).then(
    (res) => res.json(),
  )
}

export async function getCreators() {
  return fetch('https://accounts.webaverse.com/').then((res) => res.json())
}

export async function getCreatorsWithBalance() {
  return getCreators().then((res) => res)
}
