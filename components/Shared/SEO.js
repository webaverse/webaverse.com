import Head from 'next/head'

export default function SEO({
  image = '/img/hero.png',
  title = 'Webaverse',
  description = 'An internet scale cinematic universe.',
}) {
  return (
    <Head>
      <title>{title}</title>

      {/* OG Tag */}
      <meta name="description" content={description} />
      <meta content={image} property="og:image" />
      <meta content="https://webaverse.com" property="og:url" />
      <meta content="website" property="og:type" />
      <meta content={title} property="og:title" />
      <meta content="Webaverse" property="og:site_name" />
      <meta content={description} property="og:description" />

      {/* Other Metadata */}
      <meta name="msapplication-TileColor" content="#4f46e5" />
      <meta name="theme-color" content="#4f46e5" />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={title} />

      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
    </Head>
  )
}
