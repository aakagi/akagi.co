const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
  remarkPlugins: [],
  rehypePlugins: [],
  providerImportSource: '@mdx-js/react', // Enable `MDXProvider`
})

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx'],
}

module.exports = withMDX(nextConfig)
