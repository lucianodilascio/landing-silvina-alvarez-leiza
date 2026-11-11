import type { LucideIcon } from 'lucide-react'

export interface LinkItem {
  id: string
  label: string
  description: string
  href: string
  icon?: LucideIcon
}
