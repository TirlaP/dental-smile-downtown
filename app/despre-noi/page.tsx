'use client'

import dynamic from 'next/dynamic'
import { demoBusinessInfo } from '../../lib/business-info'
import { useRouter } from 'next/navigation'

const AboutPage = dynamic(() => import('../../components/pages/AboutPage'))
const PageLayout = dynamic(() => import('../../components/components/PageLayout'))

export default function About() {
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
    <PageLayout>
      <AboutPage businessInfo={demoBusinessInfo} />
    </PageLayout>
  )
}