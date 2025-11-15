import { formatDate } from "app/blog/utils"

export default async function Frontmatter({ metadata }: { metadata: any }) {
  return <>
    <h1 className="not-prose my-1">{metadata.title}</h1>
    <p className="">{formatDate(metadata.publishedAt)}</p>
    <section className="text-sm prose-gray dark:prose-invert align-middle">{metadata.summary}</section>
    <hr></hr>
  </>
}
