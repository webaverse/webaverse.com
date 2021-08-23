import { Blog, Blogs } from '../../types/Blog'

export async function getBlogPosts(): Promise<Blogs> {
  return fetch(
    `https://webaverse.ghost.io/ghost/api/v3/content/posts/?key=${process.env.GHOST_API_KEY}`,
  )
    .then((res) => res.json())
    .then((res) => res.posts)
}

export async function getBlogPost(slug: string): Promise<Blog> {
  return fetch(
    `https://webaverse.ghost.io/ghost/api/v3/content/posts/slug/${slug}/?key=${process.env.GHOST_API_KEY}`,
  )
    .then((res) => res.json())
    .then((res) => res.posts[0])
}
