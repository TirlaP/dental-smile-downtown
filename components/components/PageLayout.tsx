'use client'

import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Hide, IconButton, useColorModeValue, useDisclosure, VStack } from '@chakra-ui/react'
import { Menu } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { demoBusinessInfo } from '../../lib/business-info'
import ClientScrollingNavbar from './ClientScrollingNavbar'
import Footer from './Footer'

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const router = useRouter()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
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
  
  const getCurrentPage = () => {
    if (pathname === '/') return 'home'
    if (pathname === '/servicii') return 'services'
    if (pathname === '/despre-noi') return 'about'
    if (pathname === '/cazuri') return 'projects'
    if (pathname === '/contact') return 'contact'
    return 'home'
  }
  
  const currentPage = getCurrentPage()
  
  return (
    <Box bg={bgColor} minH="100vh">
      <ClientScrollingNavbar 
        onNavigate={handleNavigation}
        businessInfo={demoBusinessInfo}
      >
        {/* Mobile Menu Button */}
        <Hide above="md">
          <IconButton
            aria-label="Open menu"
            icon={<Menu />}
            onClick={onOpen}
            variant="ghost"
            color={currentPage === 'home' && !isScrolled ? 'white' : 'gray.600'}
            _hover={{ bg: currentPage === 'home' && !isScrolled ? 'whiteAlpha.200' : 'gray.100' }}
          />
        </Hide>
      </ClientScrollingNavbar>
      
      {/* Page Content */}
      {children}
      
      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{demoBusinessInfo.name}</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {['home', 'services', 'about', 'projects', 'contact'].map((page) => {
                const pageLabels: { [key: string]: string } = {
                  home: 'Acasă',
                  services: 'Servicii',
                  about: 'Despre Noi',
                  projects: 'Cazuri',
                  contact: 'Contact'
                }
                return (
                  <Button
                    key={page}
                    variant={page === currentPage ? 'solid' : 'ghost'}
                    colorScheme={page === currentPage ? 'blue' : 'gray'}
                    onClick={() => {
                      handleNavigation(page)
                      onClose()
                    }}
                  >
                    {pageLabels[page]}
                  </Button>
                )
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      
      {/* Footer */}
      <Footer businessInfo={demoBusinessInfo} onNavigate={handleNavigation} />
    </Box>
  )
}