export type Creators = Creator[]

export interface Creator {
  name: string
  username: string
  address: string
  firstName: string
  avatarPreview: string
  profileImageUrl: string
  image: string
  homeSpacePreview: string
  coverImageUrl: string
  cover: string
  bio: string
  description: string
  website: string
  links: {
    website: {
      handle: string
    }
  }
  user: {
    username: string
  }
}

export interface CreatorShortNameArgs {
  creator: Creator
  length: number
}
