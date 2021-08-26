import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import ReactGA from 'react-ga'
// import { useAppSelector } from '../../redux/hooks'
import { googleAnalyticsUATrackingId } from '../../constants/api'

interface LogEventArgs {
  category: string
  action: string
  label: string
}

interface TrackingContextInterface {
  logEvent: ({ category, action, label }: LogEventArgs) => void
}

const TrackingContext = React.createContext<TrackingContextInterface>({
  logEvent: (): void => {},
})

function TrackingProvider(props: unknown): JSX.Element {
  // const web3State = useAppSelector((state) => state.web3Reducer)
  const [userId] = useState('testUserId')

  const [analytics, setAnalytics] = useState({
    isInitialized: false,
    hasUser: false,
  })

  const logEvent = ({ category = '', action = '', label = '' }) => {
    if (analytics.isInitialized) {
      ReactGA.event({
        category,
        action,
        label,
      })
    }
  }

  useEffect(() => {
    const { isInitialized, hasUser } = analytics

    const handleRouteChange = (url: string) => {
      ReactGA.set({ page: url })
      ReactGA.pageview(url)
    }

    if (!isInitialized) {
      ReactGA.initialize(googleAnalyticsUATrackingId, {
        gaOptions: {
          userId,
        },
      })

      Router.events.on('routeChangeComplete', handleRouteChange)

      setAnalytics((prev) => ({
        ...prev,
        isInitialized: true,
        hasUser: Boolean(userId),
      }))
    } else if (isInitialized && !hasUser) {
      ReactGA.set({ userId })

      setAnalytics((prev) => ({
        ...prev,
        hasUser: Boolean(userId),
      }))
    }

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [userId, analytics])

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <TrackingContext.Provider {...props} value={{ logEvent }} />
}

const useTracking = (): TrackingContextInterface =>
  React.useContext(TrackingContext)

export { TrackingProvider, useTracking }
