
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   transpilePackages: ["next-mdx-remote"],
// }

// module.exports = nextConfig
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      // Without options
      'remark-gfm',
      'remark-math',
      // With options
      ['remark-toc', { heading: 'Contents' }],
    ],
    rehypePlugins: [
      // Without options
      'rehype-slug',
      'rehype-unwrap-images',
      // With options
      ['rehype-katex', { strict: true, throwOnError: true }],
    ],
  },
})

export default withMDX(nextConfig)
