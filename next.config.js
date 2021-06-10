const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
})

const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // defaults
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // defaults, idk what these sizes mean
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
}

module.exports = withMDX(nextConfig)
