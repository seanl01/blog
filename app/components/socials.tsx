import { FaGithub, FaLinkedin } from "react-icons/fa"

const socials = [
  {
    href: "https://github.com/seanl01",
    label: "GitHub",
    icon: <FaGithub size={27} />,
  },
  {
    href: "https://www.linkedin.com/in/theseanlim/",
    label: "LinkedIn",
    icon: <FaLinkedin size={27}/>,
  }
]


export default function Socials() {
  return (
    <div className="flex space-x-5 self-end">
      {socials.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-neutral-800 opacity-35 hover:opacity-90 dark:text-foreground hover:-translate-y-0.5 transition-all"
          aria-label={social.label}
        >
          {/* Gradient blur shadow - appears on hover */}
          <div
          className="absolute -inset-3 aspect-square rounded-full
              opacity-0 blur-lg pointer-events-none transition-opacity duration-300 group-hover:opacity-70 dark:group-hover:opacity-90 group-hover:animate-spin animate-[5s]"
            style={{
              background: "conic-gradient(from 0deg at right center, rgb(139, 92, 246), rgb(168, 85, 247), rgb(236, 72, 153), rgb(251, 146, 60), rgb(202, 138, 4), rgb(34, 197, 94), rgb(59, 130, 246), rgb(139, 92, 246))",
            }}
            aria-hidden="true"
          />
          {/* Icon content */}
          <span className="relative z-10">
            {social.icon}
          </span>
        </a>
      ))}
    </div>
  )
}
