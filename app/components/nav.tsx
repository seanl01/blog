"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/projects': {
    name: 'projects',
  },
  'https://drive.google.com/file/d/1RyU8CBIlFimqUj37i-ODe4Ynuf90H_22/view?usp=drive_link': {
    name: 'resume',
  },
  // 'publications': {
  //   name: 'publications',
  // },
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="font-mono flex flex-row items-stretch relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10 tracking-tight">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  target={path.startsWith('http') ? '_blank' : '_self'}
                  className={(path === pathname || (path.length > 1 && pathname.startsWith(path)) ? "font-extrabold " : "") +
                  "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
