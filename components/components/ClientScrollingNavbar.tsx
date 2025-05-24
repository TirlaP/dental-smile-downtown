'use client'

import { usePathname } from 'next/navigation'
import ScrollingNavbar from './ScrollingNavbar'

interface ClientScrollingNavbarProps {
  onNavigate: (page: string) => void
  businessInfo: any
  children?: React.ReactNode
}

export default function ClientScrollingNavbar({ onNavigate, businessInfo, children }: ClientScrollingNavbarProps) {
  const pathname = usePathname()
  
  // Determine current page from pathname
  const getCurrentPage = () => {
    if (pathname === '/') return 'home'
    if (pathname === '/servicii') return 'services'
    if (pathname === '/despre-noi') return 'about'
    if (pathname === '/cazuri') return 'projects'
    if (pathname === '/contact') return 'contact'
    return 'home'
  }
  
  return (
    <ScrollingNavbar 
      currentPage={getCurrentPage()} 
      onNavigate={onNavigate}
      businessInfo={businessInfo}
    >
      {children}
    </ScrollingNavbar>
  )
}