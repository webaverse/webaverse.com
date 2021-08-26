import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Creator } from '../../types/Creator'

interface Web3State {
  profile: Creator
}

const initialState: Web3State = {
  profile: {
    name: '',
    username: '',
    address: '',
    firstName: '',
    avatarPreview: '',
    profileImageUrl: '',
    image: '',
    homeSpacePreview: '',
    coverImageUrl: '',
    cover: '',
    bio: '',
    description: '',
    website: '',
    links: {
      website: {
        handle: '',
      },
    },
    user: {
      username: '',
    },
  },
}

export const web3Slice = createSlice({
  name: 'web3',
  initialState,
  reducers: {
    disconnect: (state) => {
      state.profile = initialState.profile
    },
    addProfile: (state, action: PayloadAction<unknown>) => {
      state.profile = action.payload as Creator
    },
  },
})

export const { addProfile, disconnect } = web3Slice.actions

export default web3Slice.reducer
