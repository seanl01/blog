
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   transpilePackages: ["next-mdx-remote"],
// }

// module.exports = nextConfig
import createMDX from '@next/mdx'
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: { unoptimized: true },
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
