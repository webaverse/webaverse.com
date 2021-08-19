const CtaCard = ({ title1, title2, description, cta, url, image }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-indigo-700 py-2 rounded-xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
      <div className="pt-4 mt-8 pb-4 px-6 sm:pt-4 sm:px-16 lg:py-16 lg:pr-0 xl:py-12 xl:px-20">
        <div className="lg:self-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">{title1}</span>
            <span className="block">{title2}</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            {description}
          </p>
          <a
            href={url}
            className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
          >
            {cta}
          </a>
          <span className="px-4 text-white">Or</span>
          <a
            href="https://discord.com/invite/R5wqYhvv53"
            className="mt-8 bg-indigo-500 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-white hover:bg-indigo-600"
          >
            Join Our Discord
          </a>
        </div>
      </div>
      <div className="-mt-6 h-full justify-center hidden lg:block">
        <img
          className="mx-auto block rounded-md object-fill object-center"
          src={image}
          alt="App screenshot"
        />
      </div>
    </div>
  </div>
)

export default CtaCard
