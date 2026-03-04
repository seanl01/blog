import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

export async function BlogPosts() {
  let allBlogs = await getBlogPosts()
  allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })

  let groupedBlogs = Object.groupBy(allBlogs, (post) => post.metadata.publishedAt.slice(0, 4))

  return (
    <div>
      {Object.entries(groupedBlogs)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, posts]) => (
          <div key={year} className="mb-6">
            <h2 className="text-xl font-bold my-4">{year}</h2>
            {posts?.map((post) => (
              <HoverCard key={post.slug} openDelay={300} closeDelay={50}>
                <HoverCardTrigger asChild>
                  {PostLink(post)}
                </HoverCardTrigger>
                <HoverCardContent className="w-[20vw] bg-background/60 backdrop-blur-3xl" side="top">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {post.metadata.summary}
                  </p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        ))}
    </div>
  )
}
function PostLink(post: { default: React.ComponentType<any>; slug: string; metadata: { title: string; publishedAt: string; summary: string; image?: string; tags?: string[] } }) {
    return <Link
        className="flex flex-col space-y-1 mb-4"
        href={`/blog/${post.slug}`}
    >
        <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[110px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
            </p>
        </div>
    </Link>
}
