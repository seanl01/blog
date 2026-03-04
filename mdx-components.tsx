import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { highlight } from 'sugar-high'

/**
 * Global MDX components used for all MDX files in the app.
 * Next.js @next/mdx expects a `useMDXComponents` export in `mdx-components.(tsx|js)`.
 */

function Table({ data }: { data: any }) {
  const headers = data.headers.map((header: string, index: number) => (
    <th key={index}>{header}</th>
  ))
  const rows = data.rows.map((row: any[], index: number) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props: any) {
  const href: string = props.href || ''

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props: any) {
  let { src, alt, ...rest } = props
  let customWidth: string | null = null

  // Parse Obsidian-style width: ![Alt Text|300](/path/to/image.png)
  if (typeof alt === 'string' && alt.includes('|')) {
    const parts = alt.split('|')
    alt = parts[0].trim()
    const potentialWidth = parts[1].trim()
    if (!isNaN(Number(potentialWidth))) {
      customWidth = potentialWidth
    }
  }

  // Prepend the base path for GitHub Pages compatibility
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.PAGES_BASE_PATH || ''
  const finalSrc = src?.startsWith('/') ? `${basePath}${src}` : src

  // If a custom width is provided, use a standard img to allow natural height: auto
  if (customWidth) {
    return (
      <div style={{ width: `${customWidth}px`, maxWidth: '100%', margin: '2rem auto' }}>
        <img
          src={finalSrc}
          alt={alt || ''}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          className="rounded-lg"
          {...rest}
        />
      </div>
    )
  }

  // Fallback to original full-width behavior for standard images
  return (
    <section className='w-full min-h-[40vh] relative my-8'>
      <Image
        alt={alt || ''}
        fill
        style={{ objectFit: "contain" }}
        className="rounded-lg"
        {...rest}
        src={finalSrc}
      />
    </section>
  )
}

function Code({ children, ...props }: any) {
  // sugar-high highlight returns HTML; we render with dangerouslySetInnerHTML
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str: any) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: any }) => {
    const childrenText = Array.isArray(children) ? children.join('') : String(children)
    const slug = slugify(childrenText)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement(
          'a',
          {
            href: `#${slug}`,
            key: `link-${slug}`,
            className: 'anchor',
          },
          null
        ),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`
  return Heading
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  // p: (props: any) => <p className="prose prose-gray dark:prose-invert" {...props} />,
  img: RoundedImage, // map markdown `![]()` to next/image
  a: CustomLink,
  code: Code,
  Table,
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
  return components
}
