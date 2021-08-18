import BlogPostCards from "../components/BlogPostCards";
import SEO from "../components/SEO";
import { getBlogPosts } from "../functions/api";

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
  );
}

export async function getServerSideProps(context) {
  const blogPosts = await getBlogPosts();

  return {
    props: {
      blogPosts,
    },
  };
}
