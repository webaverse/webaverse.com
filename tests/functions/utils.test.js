import {
  getFileExt,
  replaceHttp,
  replaceIpfs,
  truncateEthAddress,
  truncateString,
} from '../../functions/utils'

test('get png file extension', () => {
  expect(getFileExt('test.png')).toBe('png')
})

test('replace ipfs with gateway url', () => {
  expect(
    replaceIpfs('ipfs://QmddchiYMQGZYLZf86jhyhkxRqrGfpBNr53b4oiV76q6aq'),
  ).toBe(
    'https://infura-ipfs.io/ipfs/QmddchiYMQGZYLZf86jhyhkxRqrGfpBNr53b4oiV76q6aq',
  )
})

test('replace http with https', () => {
  expect(replaceHttp('http://google.com')).toBe('https://google.com')
})

test('truncate string to 1 character', () => {
  expect(truncateString('abc', 1)).toBe('a...')
})

test('truncate ethereum address', () => {
  expect(truncateEthAddress('0x33debb5ee65549ggggggg6957da6db17a9d8fe57')).toBe(
    '0x33de…fe57',
  )
})
