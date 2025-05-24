'use client'

import { Box, Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Hide, HStack, IconButton, useColorModeValue, useDisclosure, VStack } from '@chakra-ui/react'
import { Menu } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { demoBusinessInfo } from '../lib/business-info'

// Import the pages
const HomePage = dynamic(() => import('../components/pages/HomePage'))
const ClientScrollingNavbar = dynamic(() => import('../components/components/ClientScrollingNavbar'))
const Footer = dynamic(() => import('../components/components/Footer'))

export default function SmileDowntownTemplate() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
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
    <Box bg={bgColor} minH="100vh">
      {/* Scrolling Navigation */}
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
            color="white"
            _hover={{ bg: 'whiteAlpha.200' }}
          />
        </Hide>
      </ClientScrollingNavbar>
      
      {/* Page Content - No padding, starts from top */}
      <HomePage businessInfo={demoBusinessInfo} onNavigate={handleNavigation} />
      
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
                    variant={page === 'home' ? 'solid' : 'ghost'}
                    colorScheme={page === 'home' ? 'blue' : 'gray'}
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