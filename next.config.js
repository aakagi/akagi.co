/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Support MDX files as pages:
  pageExtensions: ['ts', 'tsx', 'mdx'],
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
