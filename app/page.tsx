import { BlogPosts } from 'app/components/posts'
import SettableDither from './components/dither'
import Socials from './components/socials'
import Image from 'next/image'
import source from "../public/medium.jpeg"

export default function Page() {
  return (
    <section>
      <section className='relative z-20 flex items-end justify-between'>
        <section className='flex items-end space-x-4'>
          <div className="group relative border border-gray-300 rounded-xl hover:scale-200 hover:-rotate-3 transitiontransition-all transition duration-300">
            <div
              className="absolute -inset-3 aspect-square rounded-full
                opacity-0 blur-lg pointer-events-none transition-opacity duration-300 group-hover:opacity-70 dark:group-hover:opacity-90 group-hover:animate-spin animate-[5s]"
              style={{
                background: "conic-gradient(from 0deg at right center, rgb(139, 92, 246), rgb(168, 85, 247), rgb(236, 72, 153), rgb(251, 146, 60), rgb(202, 138, 4), rgb(34, 197, 94), rgb(59, 130, 246), rgb(139, 92, 246))",
              }}
              aria-hidden="true"
            />
            <Image className='relative z-30 rounded-xl' src={source} alt="Profile Picture" width={40} height={40} priority />
          </div>
          <h1 className="text-4xl font-semibold tracking-tighter font-mono leading-none">
            Sean Lim
          </h1>
        </section>
        <Socials />
      </section>
      <SettableDither />

      <p className="mb-4">
        I'm <span className='font-bold'>Sean</span>. I care about making AI more interpretable and applying tech to solve important problems.
        I'm currently a Masters of Information Systems Management at <a className="underline" href="https://cmu.edu" target="_blank" rel="noopener noreferrer">Carnegie Mellon University</a> (Graduating Fall '26), where I learn about managing complexity in IT and
        making informed decisions.
        In my free time, I enjoy fiddling with jazz on the piano, playing a game of <a className="underline" href="https://github.com/seanl01/football-trainer" target="_blank" rel="noopener noreferrer">football</a> (soccer) with friends, or drinking a good iced latte.

        <br></br>
        <br></br>
        Reach me at <span className="font-medium">seanlim2<span className="hidden">antispam</span>@gmail<span className="hidden">antispam</span>.com</span>
      </p>
      <div className="my-8">
        <h2 className="mb-8 text-xl font-semibold">Featured Posts</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
