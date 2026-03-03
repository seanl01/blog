import { formatDate } from "app/blog/utils"

export default async function Frontmatter({ metadata }: { metadata: any }) {
  return <section className="flex flex-col gap-2">
    <h1 className="my-2">{metadata.title}</h1>
    <section className="my-2">{formatDate(metadata.publishedAt)}</section>
    <section className="flex gap-2.5 my-2">
      {metadata?.tags && metadata.tags.map((tag, idx) =>
        <section key={idx} className="relative inline-block group">
          <div
          className="absolute -inset-3 rounded-full
              opacity-0 blur-xl pointer-events-none transition-opacity duration-300 group-hover:opacity-60 dark:group-hover:opacity-60  hover:animate-pulse"
            style={{
              background: "conic-gradient(from 0deg at right center, rgb(139, 92, 246), rgb(168, 85, 247), rgb(236, 72, 153), rgb(251, 146, 60), rgb(202, 138, 4), rgb(34, 197, 94), rgb(59, 130, 246), rgb(139, 92, 246))",
            }}
            aria-hidden="true"
          />
          <span className="rounded-full px-2.5 py-1 opacity-80 hover:opacity-100 text-sm border relative z-10">{tag}</span>
        </section>
      )}
    </section>
    <section className="my-2 text-sm opacity-80 align-middle">{metadata.summary}</section>
    <hr className="my-8!"></hr>
  </section>
}
