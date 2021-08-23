import { GetServerSideProps } from 'next'
import BlogPostCards from '../components/Landing/BlogPostCards'
import SEO from '../components/Shared/SEO'
import { getBlogPosts } from '../functions/api/blog'
import { Blogs } from '../types/Blog'

interface Props {
  blogPosts: Blogs
}

export default function Blog({ blogPosts }: Props): JSX.Element {
  return (
    <div>
      <SEO
        title="Webaverse Blog"
        description="Webaverse, explained. Learn about the latest developments of the Metaverse."
        image="/img/hero.png"
      />
      <BlogPostCards
        posts={blogPosts}
        title="From the Webaverse blog"
        description="Webaverse, explained. Learn about the latest developments of the Metaverse."
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const blogPosts = await getBlogPosts()

  return {
    props: {
      blogPosts,
    },
  }
}
