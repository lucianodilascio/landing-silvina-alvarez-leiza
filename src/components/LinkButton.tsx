import { ArrowUpRight } from 'lucide-react'
import type { LinkItem } from '../types/link'

interface LinkButtonProps {
  link: LinkItem
}

const LinkButton = ({ link }: LinkButtonProps) => {
  const { label, description, href } = link
  const isExternal = href.startsWith('http')

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Interceptamos solo si es el enlace de email
    if (href.startsWith('mailto:')) {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

      // Si está en PC, frenamos el clic natural y abrimos Gmail Web con ambos destinatarios
      if (!isMobile) {
        e.preventDefault()
        const desktopGmailUrl =
          'https://mail.google.com/mail/?view=cm&fs=1&to=silvina@alvarezleiza.com,info@alvarezleiza.com&su=Consulta%20desde%20la%20web&body=Hola%20que%20tal%3F%20queria%20hacerte%20una%20consulta'
        window.open(desktopGmailUrl, '_blank', 'noopener,noreferrer')
      }
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group flex w-full items-center justify-between border-b border-[#C7BEB8] py-4 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BA2C1E]"
    >
      <span className="flex min-w-0 flex-col text-left">
        <span className="font-neogothis text-lg font-bold text-[#1A1A1A] transition-colors duration-200 group-hover:text-[#BA2C1E] ">
          {label}
        </span>
        <span className="truncate font-neogothis text-xs text-[#55504C]">
          {description}
        </span>
      </span>
      <ArrowUpRight
        className="h-5 w-5 shrink-0 text-[#BA2C1E] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  )
}

export default LinkButton