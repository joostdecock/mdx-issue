const remarkImages = require('@fec/remark-responsive-images')
const path = require('path')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [remarkImages, {
        srcDir: path.resolve('.', 'public'),
        targetDir: path.resolve('.', 'public'),
        blurredBackground: false,
        imageSizes: [500, 1000, 1500],
        resolutions: [1,2,3],
      }],
    ],
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})
