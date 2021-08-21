import Head from 'next/head'

export default function Analytics() {
  return (
    <Head>
      {process.env.NODE_ENV !== 'development' && (
        <>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-DQT0N30X7D"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-DQT0N30X7D'); 
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "838tbgka40");
          `,
            }}
          />
        </>
      )}
    </Head>
  )
}
