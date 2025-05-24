'use client'

import dynamic from 'next/dynamic'
import { demoBusinessInfo } from '../../lib/business-info'
import { useRouter } from 'next/navigation'

const ContactPage = dynamic(() => import('../../components/pages/ContactPage'))
const PageLayout = dynamic(() => import('../../components/components/PageLayout'))

export default function Contact() {
  const router = useRouter()
  
  const handleNavigation = (page: string) => {
    const routeMap: { [key: string]: string } = {
      'home': '/',
      'services': '/servicii',
      'about': '/despre-noi',
      'projects': '/cazuri',
      'contact': '/contact'
    }
    router.push(routeMap[page] || '/')
  }
  
  return (
    <PageLayout
      businessInfo={demoBusinessInfo}
      onNavigate={handleNavigation}
    >
      <ContactPage businessInfo={demoBusinessInfo} />
    </PageLayout>
  )
}