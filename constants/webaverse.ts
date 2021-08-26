const chainName = (() => {
  if (
    typeof window !== 'undefined' &&
    /^test\./.test(window.location.hostname)
  ) {
    return 'testnet'
  }
  if (
    typeof window !== 'undefined' &&
    /^polygon\./.test(window.location.hostname)
  ) {
    return 'polygon'
  }
  return 'mainnet'
})()

const otherChainName = /sidechain/.test(chainName)
  ? chainName.replace(/sidechain/, '')
  : `${chainName}sidechain`

export { chainName, otherChainName }

export const webaverseApiEndpoint = (() => {
  if (typeof window !== 'undefined') {
    if (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1'
    ) {
      return 'http://localhost:3000'
    }
    return 'https://webaverse.com'
  }
  return 'http://localhost:3000'
})()

export const ghostBlogEndpoint =
  'https://webaverse.ghost.io/ghost/api/v3/content'

export const webaverseAccountsEndpoint = `https://${chainName}sidechain-accounts.webaverse.com`
export const webaverseTokensEndpoint = `https://${chainName}all-tokens.webaverse.com`
export const webaverseLandEndpoint = `https://${chainName}sidechain-land.webaverse.com`
export const webaverseStorageEndpoint = 'https://ipfs.exokit.org'
export const webaversePreviewEndpoint = 'https://preview.exokit.org'
export const webaverseWorldsEndpoint = 'https://worlds.exokit.org'
export const webaverseContractsEndpoint = 'https://contracts.webaverse.com'
export const webaverseLocalStorageEndpoint =
  'https://localstorage.webaverse.com'
export const webaverseLoginEndpoint = 'https://login.exokit.org'

export const web3MainnetSidechainEndpoint =
  'https://mainnetsidechain.exokit.org'
export const web3TestnetSidechainEndpoint =
  'https://testnetsidechain.exokit.org'
