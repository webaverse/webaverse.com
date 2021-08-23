import { truncateString, replaceIpfs } from '../utils'
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
