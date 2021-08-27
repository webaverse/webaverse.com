import 'tailwindcss/tailwind.css'
import '../style/global.css'
import Router from 'next/router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import NProgress from 'nprogress'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Shared/Footer'
import '../style/nprogress.css'
import Analytics from '../components/Shared/Analytics'
import { store, persistor } from '../redux/store'
import { TrackingProvider } from '../components/Shared/Tracking'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }) {
  if (typeof window === 'undefined') {
    return (
      <Provider store={store}>
        <TrackingProvider>
          <div className="flex">
            <Analytics />
            <div className="flex-grow bg-gray-100">
              <Navbar />
              <div className="max-w-screen-2xl mx-auto min-h-screen pt-20">
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} />
              </div>
              <Footer />
            </div>
          </div>
        </TrackingProvider>
      </Provider>
    )
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TrackingProvider>
          <div className="flex">
            <Analytics />
            <div className="flex-grow bg-gray-100">
              <Navbar />
              <div className="max-w-screen-2xl mx-auto min-h-screen pt-20">
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} />
              </div>
              <Footer />
            </div>
          </div>
        </TrackingProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
