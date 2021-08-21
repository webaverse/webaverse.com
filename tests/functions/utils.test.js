import { truncateString } from '../../functions/utils'

test('truncate string to 1 character', () => {
  expect(truncateString('abc', 1)).toBe('a...')
})
