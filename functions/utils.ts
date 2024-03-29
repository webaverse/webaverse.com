export function getFileExt(filename: string): string {
  return filename.split('.').pop() ?? ''
}

export function replaceIpfs(url: string): string {
  const replacedUrl = url
    ? url
        .replace('ipfs://Q', 'https://infura-ipfs.io/ipfs/Q')
        .replace('ipfs://ipfs/', 'https://infura-ipfs.io/ipfs/')
        .replace('https://ipfs.io/ipfs/', 'https://infura-ipfs.io/ipfs/')
    : ''

  return replacedUrl
}

export function replaceHttp(url: string): string {
  return url.replace('http://', 'https://')
}

export function addDefaultSrc(e: Event & { target: HTMLImageElement }): null {
  if (e.target)
    e.target.src =
      'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'

  return null
}

export function truncateString(string: string, length: number): string {
  return string?.length > length ? `${string.substring(0, length)}...` : string
}

export function truncateEthAddress(address: string): string {
  if (!address) return address
  // Captures 0x + 4 characters, then the last 4 characters.
  const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/

  const match = address.match(truncateRegex)
  if (!match) return address
  return `${match[1]}...${match[2]}`
}

export function getRandomWebaverseImage(): string {
  const images = [
    // 'https://docs.webaverse.com/assets/images/gift_silk-7d26f9c150d4db513e52c2fb6b3f389b.jpg',
    // 'https://blog.webaverse.com/content/images/size/w2000/2021/08/blob.png',
    // 'https://blog.webaverse.com/content/images/2021/08/image-10.png',
    // 'https://blog.webaverse.com/content/images/size/w1000/2021/08/VRChat_dWPbbvrSnT.jpg',
    'https://blog.webaverse.com/content/images/size/w2000/2021/07/SeasonSwitchNew_copy.jpg',
    // 'https://blog.webaverse.com/content/images/size/w2000/2021/04/0bd04670b1e51acf3ba0e3eaad2d45f9-1.jpg',
    // 'https://blog.webaverse.com/content/images/size/w1000/2021/01/thestreet.PNG',
    // 'https://cdn.discordapp.com/banners/433492168825634816/080a87e705da9b3f9040486040177da9.jpg?size=2048',
  ]

  return images[Math.floor(images.length * Math.random())]
}

export function getRandomWebaverseAvatarImage(): string {
  const images = [
    'https://preview.exokit.org/QmNcA1Qkis2yuPiPYhqSPm3pW2wa91uw1s8hy6ZiwvrHtj.vrm/preview.png',
  ]

  return images[Math.floor(images.length * Math.random())]
}

export function numberWithCommas(x: string): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
