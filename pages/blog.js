import BlogPostCards from '../components/Landing/BlogPostCards'
import SEO from '../components/Shared/SEO'
import { getBlogPosts } from '../functions/api/blog'

export default function Blog({ blogPosts }) {
  return (
    <div>
      <SEO
        title="Webaverse Blog"
        description="Webaverse, explained. Learn about the latest developments of the Metaverse."
      />
      <BlogPostCards
        posts={blogPosts}
        title="From the Webaverse blog"
        description="Webaverse, explained. Learn about the latest developments of the Metaverse."
      />
    </div>
  )
}

export async function getServerSideProps() {
  const blogPosts = await getBlogPosts()

  return {
    props: {
      blogPosts,
    },
  }
}
