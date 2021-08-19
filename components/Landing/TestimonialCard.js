const TestimonialCard = ({
  background,
  logo,
  description,
  name,
  title,
  company,
}) => (
  <div className="py-16 lg:py-24">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative py-24 px-8 bg-indigo-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
          <img src={background} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative lg:col-span-1">
          <img className="h-12 w-auto" src={logo} alt="" />
          <blockquote className="mt-6 text-white">
            <p className="text-xl font-medium sm:text-2xl">
              &quot;{description}&quot;
            </p>
            <footer className="mt-6">
              <p className="flex flex-col font-medium">
                <span>{name}</span>
                <span>
                  {title},{company}
                </span>
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
)

export default TestimonialCard
