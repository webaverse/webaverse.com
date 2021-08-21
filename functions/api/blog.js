export async function getBlogPosts() {
  return fetch(
    `https://webaverse.ghost.io/ghost/api/v3/content/posts/?key=${process.env.GHOST_API_KEY}`,
  ).then((res) => res.json())
}

export async function getBlogPost(slug) {
  return fetch(
    `https://webaverse.ghost.io/ghost/api/v3/content/posts/slug/${slug}/?key=${process.env.GHOST_API_KEY}`,
  )
    .then((res) => res.json())
    .then((res) => res.posts[0])
}
