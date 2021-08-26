import { ghostBlogEndpoint } from '../../constants/webaverse'
import { Blog, Blogs } from '../../types/Blog'

export async function getBlogPosts(): Promise<Blogs> {
  return fetch(`${ghostBlogEndpoint}/posts/?key=${process.env.GHOST_API_KEY}`)
    .then((res) => res.json())
    .then((res) => res.posts)
}

export async function getBlogPost(slug: string): Promise<Blog> {
  return fetch(
    `${ghostBlogEndpoint}/posts/slug/${slug}/?key=${process.env.GHOST_API_KEY}`,
  )
    .then((res) => res.json())
    .then((res) => res.posts[0])
}
