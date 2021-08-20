import { truncateString, replaceIpfs } from './utils'

export function getItemName(item) {
  return item.name || 'Untitled'
}

export function getItemDescription(item) {
  return item.description || ''
}

export function getShortItemName(item, length) {
  return truncateString(getItemName(item), length)
}

export function getItemImage(item) {
  return (
    replaceIpfs(item.image) ||
    replaceIpfs(item.image_url) ||
    replaceIpfs(item.animation_url)
  )
}
