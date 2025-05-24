'use client'

import { Box, useColorModeValue } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { demoBusinessInfo } from '../../lib/business-info'
import { useRouter } from 'next/navigation'

const ContactPage = dynamic(() => import('../../components/pages/ContactPage'))
const ClientScrollingNavbar = dynamic(() => import('../../components/components/ClientScrollingNavbar'))
const Footer = dynamic(() => import('../../components/components/Footer'))

export default function Contact() {
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
      <ContactPage businessInfo={demoBusinessInfo} />
      <Footer businessInfo={demoBusinessInfo} onNavigate={handleNavigation} />
    </Box>
  )
}