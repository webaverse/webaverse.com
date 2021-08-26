import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { infuraKey } from '../../constants/web3'
import { store } from '../../redux/store'
import { addProfile } from '../../redux/slices/web3'
import { getAllCreatorsProfiles } from '../api/profile'

export const providers = {
  //   mainnet: new ethers.providers.JsonRpcProvider(url);
}

export async function connectWithWeb3Modal(): Promise<void> {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: infuraKey,
      },
    },
  }

  const web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions,
  })

  const instance = await web3Modal.connect()
  const provider = new ethers.providers.Web3Provider(instance)
  const signer = provider.getSigner()
  const signature = await signer.signMessage(
    'Welcome to Webaverse! Sign to log into Webaverse.',
  )

  if (signature) {
    const address = await signer.getAddress()
    const profile = await getAllCreatorsProfiles(address)
    store.dispatch(addProfile(profile))
  }
}
