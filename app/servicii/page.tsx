'use client'

import { Box, useColorModeValue } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { demoBusinessInfo } from '../page'
import { useRouter } from 'next/navigation'

const ServicesPage = dynamic(() => import('../../components/pages/ServicesPage'))
const ClientScrollingNavbar = dynamic(() => import('../../components/components/ClientScrollingNavbar'))
const Footer = dynamic(() => import('../../components/components/Footer'))

export default function Services() {
  const router = useRouter()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  
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
    <Box bg={bgColor} minH="100vh">
      <ClientScrollingNavbar 
        onNavigate={handleNavigation}
        businessInfo={demoBusinessInfo}
      />
      <ServicesPage businessInfo={demoBusinessInfo} onNavigate={handleNavigation} />
      <Footer businessInfo={demoBusinessInfo} onNavigate={handleNavigation} />
    </Box>
  )
}