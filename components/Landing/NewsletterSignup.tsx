interface Props {
  title: string
  description: string
  cta: string
}

const NewsletterSignup = ({ title, description, cta }: Props): JSX.Element => (
  <div className="">
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="py-10 px-6 bg-indigo-700 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-indigo-100">
            {description}
          </p>
        </div>
        <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
          <form
            className="sm:flex"
            method="post"
            target="_blank"
            action="https://webaverse.us7.list-manage.com/subscribe/post?u=2ede3716258e23a8f1ed28d76&id=29ede072f5"
            noValidate
            id="mc-embedded-subscribe-form"
          >
            <input
              id="mce-EMAIL"
              name="EMAIL"
              type="email"
              autoComplete="email"
              required
              className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
            >
              {cta}
            </button>
          </form>
          {/* <p className="mt-3 text-sm text-indigo-100">
            We care about the protection of your data. Read our{' '}
            <a href="#" className="text-white font-medium underline">
              Privacy Policy.
            </a>
          </p> */}
        </div>
      </div>
    </div>
  </div>
)

export default NewsletterSignup
