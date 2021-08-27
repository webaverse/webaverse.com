import { truncateString, replaceIpfs, getFileExt } from '../utils'
import { Item, ShortItemNameArgs } from '../../types/Item'

export function getItemName(item: Item): string {
  return item.name || 'Untitled'
}

export function getShortItemName({ item, length }: ShortItemNameArgs): string {
  return truncateString(getItemName(item), length)
}

export function getItemDescription(item: Item): string {
  return item.description || ''
}

export function getItemImage(item: Item): string {
  return (
    replaceIpfs(item.image) ||
    replaceIpfs(item.animation_url) ||
    replaceIpfs(item.image_url)
  )
}

export function getItemPreviewImage(item: Item): string {
  const animationExt = item.animation_url ? getFileExt(item.animation_url) : ''
  const animationUrl = animationExt === 'gif' ? item.animation_url : ''

  return (
    replaceIpfs(item.image) ||
    replaceIpfs(animationUrl) ||
    replaceIpfs(item.image_url)
  )
}
