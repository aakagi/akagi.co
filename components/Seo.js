import React from 'react';
import NextHead from 'next/head';

export default class Seo extends React.Component {
  render() {
    const {
      title = 'Akagi.co',
      description = 'Read my stuff!',
      image = '/profile.jpg',
      children,
      canonical,
      url = '',
    } = this.props;

    const properCanonical = canonical || url;

    return (
      <NextHead>
        <title>
          {title}
        </title>

        <meta name="description" content={description} />

        {/* Open Graph */}
        <link itemProp="url" href="https://akagi.co" />
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
        <meta name="twitter:site" content="@aakagi" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@aakagi" />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:image:src" content="" />

        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />

        <link
          rel="canonical"
          href={`https://akagi.co${properCanonical}`}
        />

        {children}

        <link rel="shortcut icon" href="/akagi-logo.png" />
        <link rel="icon" href="/akagi-logo.png" />
      </NextHead>
    )
  }
}
