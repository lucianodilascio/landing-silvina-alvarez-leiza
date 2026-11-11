import { Camera, Globe, MessageCircle } from 'lucide-react'
import type { LinkItem } from '../types/link'

// Enlaces de la landing page
export const links: LinkItem[] = [
  {
    id: 'web',
    label: 'Sitio web',
    description: 'Portfolio, proyectos y propiedades',
    href: 'http://alvarezleiza.com/',
    icon: Globe,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    description: 'Novedades del estudio y la inmobiliaria',
    href: 'https://www.instagram.com/silvinaalvarezleiza',
    icon: Camera,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    description: 'Escribime para una consulta',
    href: 'https://wa.me/5491161841100?text=Hola%20que%20tal%3F%20te%20escribo%20por%20una%20consulta',
    icon: MessageCircle,
  },
 {
    id: 'email',
    label: 'Email',
    description: 'silvina@alvarezleiza.com, info@alvarezleiza.com',
    href: 'mailto:silvina@alvarezleiza.com, info@alvarezleiza.com?subject=Consulta%20desde%20la%20web&body=Hola%20que%20tal%3F%20queria%20hacerte%20una%20consulta',
  },
  
]
