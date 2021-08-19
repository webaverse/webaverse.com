import Link from 'next/link'

const BlogPostCards = ({ posts, title, description }) =>
  posts.posts?.length > 0 && (
    <div className="relative pt-8 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {description}
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.posts.map((post) => (
            <Link key={post.uuid} href={`/blog/${post.slug}`}>
              <a>
                <div
                  key={post.uuid}
                  className="flex flex-col h-full rounded-lg shadow-lg overflow-hidden transform transition ease-in duration-100 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={post.feature_image}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <a href={post.href} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.custom_excerpt || post.meta_description}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="ml-3">
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={post.created_at}>
                            {new Date(post.created_at).toDateString()}
                          </time>
                          <span aria-hidden="true">&middot;</span>
                          <span>{post.reading_time} min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )

export default BlogPostCards
