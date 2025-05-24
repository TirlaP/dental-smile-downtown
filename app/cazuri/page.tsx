'use client'

import dynamic from 'next/dynamic'
import { demoBusinessInfo } from '../../lib/business-info'
import { useRouter } from 'next/navigation'

const ProjectsPage = dynamic(() => import('../../components/pages/ProjectsPage'))
const PageLayout = dynamic(() => import('../../components/components/PageLayout'))

export default function Projects() {
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
      <ProjectsPage businessInfo={demoBusinessInfo} />
    </PageLayout>
  )
}