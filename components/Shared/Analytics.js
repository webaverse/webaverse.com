import Head from 'next/head'

export default function Analytics() {
  return (
      <Head>

          {/* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=<YOUR_GA_ID_HERE>"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '<YOUR_GA_ID_HERE>');
          `,
            }}
          />
      </Head>
  )
}
