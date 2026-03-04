"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { IoSunnyOutline, IoMoonOutline, IoMoon } from "react-icons/io5";
import { useTheme } from 'next-themes'

const navItems = [
  { href: '/', name: 'home' },
  { href: '/blog', name: 'blog' },
  { href: '/projects', name: 'projects' },
  { href: 'https://drive.google.com/file/d/1RyU8CBIlFimqUj37i-ODe4Ynuf90H_22/view?usp=drive_link', name: 'resume' },
  // { href: '/publications', name: 'publications' },
]

export function Navbar() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="font-mono flex flex-row justify-between items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <Link
            href="/"
            className={(pathname === '/' ? 'font-extrabold ' : '') + 'py-1 px-2 m-1 transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center relative'}
          >
            // SL
          </Link>
          <div className="flex flex-row items-center space-x-0 tracking-tight">
            {navItems.slice(1).map(({ href, name }) => {
              const isExternal = href.startsWith('http')
              const isActive = href === pathname || (href.length > 1 && pathname?.startsWith(href))
              return (
                <Link
                  key={href}
                  href={href}
                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={(isActive ? 'font-extrabold ' : '') +
                    'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center relative py-1 px-2 m-1 last:pr-0'}
                >
                  {name}
                </Link>
              )
            })}
            {/* Moon and sun toggle for dark mode */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="cursor-pointer ml-2 h-8 w-8 flex items-center justify-center rounded-full transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              {mounted ? (theme === 'dark' ? <IoSunnyOutline/> : <IoMoonOutline />) : null}
            </button>
          </div>
        </nav>
      </div>
    </aside>
  )
}
