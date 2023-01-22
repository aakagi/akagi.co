export const Seo = ({
  title = 'Akagi.co',
  description = 'Read my stuff!',
  image = '/profile.jpg',
  children = null,
  canonical = '',
  url = '',
}) => {
  return (
    <>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:height" content="652" />
      <meta property="og:image:width" content="652" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Akagi.co" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@akagi____" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@akagi____" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image:src" content="" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />

      <link rel="canonical" href={`https://akagi.co${canonical}`} />

      {children}

      <link rel="shortcut icon" href="/akagi-logo.png" />
      <link rel="icon" href="/akagi-logo.png" />
    </>
  )
}
