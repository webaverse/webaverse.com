import {
  getItemDescription,
  getItemImage,
  getItemName,
  getShortItemName,
} from '../../../functions/helper/item'

const item = {
  name: 'test',
  image: 'https://test.com/test.png',
  description: 'test',
}

test('get item name', () => {
  expect(getItemName(item)).toBe(item.name)
})

test('get short item name', () => {
  expect(getShortItemName(item, 1)).toBe('t...')
})

test('get item description', () => {
  expect(getItemDescription(item)).toBe(item.description)
})

test('get item image', () => {
  expect(getItemImage(item)).toBe(item.image)
})
