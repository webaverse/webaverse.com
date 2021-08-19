import 'tailwindcss/tailwind.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Shared/Footer'
import '../style/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
      <div className="flex">
          <div className="flex-grow bg-gray-100">
              <Navbar />
              <div className="max-w-screen-2xl mx-auto min-h-screen pt-20">
                  <Component {...pageProps} />
              </div>
              <Footer />
          </div>
      </div>
  )
}

export default MyApp
