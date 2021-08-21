import {
  getCreatorBio,
  getCreatorHomeSpaceImage,
  getCreatorName,
  getCreatorProfileImage,
  getCreatorShortName,
  getCreatorWebsite,
} from '../../../functions/helper/creator'

const creator = {
  name: 'test',
  username: 'nottest',
  avatarPreview: 'https://test.com/avatarPreview.png',
  profileImageUrl: 'https://test.com/test.png',
  homeSpacePreview: 'https://test.com/homespace.png',
  bio: 'test',
  description: 'nottest',
  website: 'https://test.com',
}

test('get creator profile image', () => {
  expect(getCreatorProfileImage(creator)).toBe(creator.avatarPreview)
})

test('get creator home space image', () => {
  expect(getCreatorHomeSpaceImage(creator)).toBe(creator.homeSpacePreview)
})

test('get creator bio', () => {
  expect(getCreatorBio(creator)).toBe(creator.bio)
})

test('get creator website', () => {
  expect(getCreatorWebsite(creator)).toBe(creator.website)
})

test('get creator name', () => {
  expect(getCreatorName(creator)).toBe(creator.name)
})

test('get short creator name', () => {
  expect(getCreatorShortName(creator, 1)).toBe('t...')
})
