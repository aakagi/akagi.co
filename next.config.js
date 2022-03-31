const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Prefer loading of ES Modules over CommonJS
    esmExternals: true,
  },
  // Support MDX files as pages:
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        // The default `babel-loader` used by Next:
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            /* jsxImportSource: …, otherOptions… */
          },
        },
      ],
    })

    return config
  },
}

module.exports = nextConfig
