import {
  replaceIpfs,
  truncateString,
  getRandomWebaverseAvatarImage,
  getRandomWebaverseImage,
} from './utils'

export function getCreatorProfileImage(creator) {
  return (
    creator?.avatarPreview || // webaverse
    creator?.profileImageUrl || // foundation
    replaceIpfs(creator?.image) || // rarible
    // creator?.profile_img_url || // opensea
    getRandomWebaverseAvatarImage()
  )
}

export function getCreatorHomeSpaceImage(creator) {
  return (
    creator?.homeSpacePreview || // webaverse
    creator?.coverImageUrl || // foundation
    replaceIpfs(creator?.cover) || // rarible
    getRandomWebaverseImage()
  )
}

export function getCreatorBio(creator) {
  return (
    creator?.bio || // foundation
    creator?.description || // rarible
    ''
  )
}

export function getCreatorWebsite(creator) {
  return (
    creator?.website || // rarible
    creator?.links?.website?.handle || // foundation
    ''
  )
}

export function getCreatorName(creator) {
  return (
    creator?.name || // webaverse, rarible
    creator?.user?.username || // opensea
    creator?.firstName || // foundation
    'Anonymous'
  )
}

export function getCreatorShortName(creator, length) {
  return truncateString(getCreatorName(creator), length)
}
