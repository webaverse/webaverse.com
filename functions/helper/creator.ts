import {
  replaceIpfs,
  truncateString,
  getRandomWebaverseAvatarImage,
  getRandomWebaverseImage,
} from '../utils'

import { Creator, CreatorShortNameArgs } from '../../types/Creator'

export function getCreatorProfileImage(creator: Creator): string {
  return (
    creator?.avatarPreview || // webaverse
    creator?.profileImageUrl || // foundation
    replaceIpfs(creator?.image) || // rarible
    // creator?.profile_img_url || // opensea
    getRandomWebaverseAvatarImage()
  )
}

export function getCreatorHomeSpaceImage(creator: Creator): string {
  return (
    creator?.homeSpacePreview || // webaverse
    creator?.coverImageUrl || // foundation
    replaceIpfs(creator?.cover) || // rarible
    getRandomWebaverseImage()
  )
}

export function getCreatorBio(creator: Creator): string {
  return (
    creator?.bio || // foundation
    creator?.description || // rarible
    ''
  )
}

export function getCreatorWebsite(creator: Creator): string {
  return (
    creator?.website || // rarible
    creator?.links?.website?.handle || // foundation
    ''
  )
}

export function getCreatorName(creator: Creator): string {
  return (
    creator?.name || // webaverse, rarible
    creator?.username || // webaverse, rarible
    creator?.user?.username || // opensea
    creator?.firstName || // foundation
    'Anonymous'
  )
}

export function getCreatorShortName({
  creator,
  length,
}: CreatorShortNameArgs): string {
  return truncateString(getCreatorName(creator), length)
}
