import { BlogPosts } from 'app/components/posts'
import SettableDither from './components/dither'
import Socials from './components/socials'
export default function Page() {
  return (
    <section>
      <section className='flex items-center justify-between'>
        <h1 className="text-4xl font-semibold tracking-tighter font-mono">
          Sean Lim
        </h1>
        <Socials/>
      </section>
      <SettableDither />

      <p className="mb-4">
        I'm <span className='font-bold'>Sean</span>. I care about making AI more interpretable and applying tech to solve important problems.
          I'm currently a Masters of Information Systems Management at <a className="underline" href="https://cmu.edu" target="_blank" rel="noopener noreferrer">Carnegie Mellon University</a> (Graduating Fall '26), where I learn about managing complexity in IT and
          making informed decisions.
          In my free time, I enjoy fiddling with jazz on the piano, playing a game of <a className="underline" href="https://github.com/seanl01/football-trainer" target="_blank" rel="noopener noreferrer">football</a> (soccer) with friends, or drinking a good iced latte.
      </p>
      <div className="my-8">
        <h2 className="mb-8 text-xl font-semibold">Featured Posts</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
