import Link from 'next/link'
import SEO from '../components/Shared/SEO'

export default function FourOhFour() {
  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="Sorry, we couldn’t find the page you’re looking for."
      />
      <div className="py-16">
        <div className="text-center">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            404 error
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Page not found.
          </h1>
          <p className="mt-2 text-base text-gray-500">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-6">
            <Link href="/">
              <a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                Go back home
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
