import { BlogPosts } from 'app/components/posts'
import SettableDither from './components/dither'
export default function Page() {
  return (
    <section>
      <h1 className="text-4xl font-semibold tracking-tighter font-mono">
        Sean Lim
      </h1>

      <SettableDither />

      <p className="mb-4">
        {`I'm Sean. I care about making AI more interpretable and applying tech to solve important problems.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
