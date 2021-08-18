import SEO from "../../components/Shared/SEO";
import { getBlogPost } from "../../functions/api";

export default function BlogPost({ post }) {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <SEO
        title={post.title}
        description={post.custom_excerpt}
        image={post.feature_image}
      />
      <div className="text-lg max-w-prose mx-auto">
        <h1 className="py-4 text-6xl font-semibold">{post.title}</h1>
        <span className="py-4 text-gray-500">{post.custom_excerpt}</span>
        <img className="py-8" src={post.feature_image} />
        <div
          className="prose prose-indigo prose-lg mx-auto"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const post = await getBlogPost(slug);

  return {
    props: {
      post,
    },
  };
}
