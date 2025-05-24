'use client'

import { Badge, Box, Button, Container, HStack, Heading, Icon, SimpleGrid, Text, VStack, useColorModeValue, Image, AspectRatio } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ArrowRight, Activity, Heart, Sparkles, Shield, Zap, Clock, Award, CheckCircle, Phone } from 'lucide-react'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

interface ServicesPageProps {
  businessInfo: any
  onNavigate: (page: string) => void
}

export default function ServicesPage({ businessInfo, onNavigate }: ServicesPageProps) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'white')
  const cardBg = useColorModeValue('gray.50', 'gray.700')
  
  const services = [
    {
      icon: Heart,
      title: 'Stomatologie Preventivă',
      description: 'Prevenția și diagnosticarea timpurie pentru menținerea sănătății dentare pe termen lung',
      features: ['Consultații preventive', 'Detartraj profesional', 'Fluorizare', 'Educație pentru igienă orală'],
      price: 'De la 80 RON',
      color: 'pink.500'
    },
    {
      icon: Shield,
      title: 'Tratamente Minim-Invazive',
      description: 'Abordare conservatoare cu intervenții delicate și fără durere pentru confortul maxim',
      features: ['Obturații estetice', 'Tratamente conservatoare', 'Proceduri fără durere', 'Recuperare rapidă'],
      price: 'De la 150 RON',
      color: 'green.500'
    },
    {
      icon: Activity,
      title: 'Chirurgie Oro-Maxilo-Facială',
      description: 'Specialitatea Dr. Dîrzu - intervenții chirurgicale de precisie cu echipamente moderne',
      features: ['Extrații complexe', 'Chirurgie parodontală', 'Intervenții precisie', 'Tehnici moderne'],
      price: 'Consultație pentru evaluare',
      color: 'blue.500'
    },
    {
      icon: Sparkles,
      title: 'Ortodonție și Ortopedie Dento-Facială',
      description: 'Specialitatea Dr. Slevaș - corectarea malocluziilor pentru toate vârstele',
      features: ['Aparate ortodontice', 'Ortopedie dento-facială', 'Tratamente personalizate', 'Rezultate durabile'],
      price: 'De la 1500 RON',
      color: 'purple.500'
    },
    {
      icon: CheckCircle,
      title: 'Stomatologie Generală',
      description: 'Servicii complete de îngrijire dentară pentru întreaga familie',
      features: ['Obturații composite', 'Tratamente de canal', 'Proteze dentare', 'Urgențe stomatologice'],
      price: 'De la 120 RON',
      color: 'teal.500'
    },
    {
      icon: Award,
      title: 'Îmbunătățirea Calității Vieții',
      description: 'Focus pe confortul pacientului și îmbunătățirea calității vieții prin tratamente personalizate',
      features: ['Abordare personalizată', 'Confort maxim', 'Rezultate durabile', 'Urmărire post-tratament'],
      price: 'Inclus în toate serviciile',
      color: 'orange.500'
    }
  ]  
  return (
    <Box bg={bgColor} pt="80px">
      {/* Hero Section */}
      <Box bg="linear-gradient(135deg, #4C51BF 0%, #667EEA 50%, #764BA2 100%)" color="white" py={{ base: 16, md: 20 }} minH="60vh" display="flex" alignItems="center">
        <Container maxW="container.xl">
          <MotionVStack
            spacing={6}
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge 
              bg="whiteAlpha.200" 
              color="white" 
              fontSize="md" 
              px={4} 
              py={2}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.300"
            >
              SERVICII COMPLETE
            </Badge>
            <Heading size={{ base: 'xl', md: '2xl' }} maxW="4xl">
              Servicii Stomatologice Complete în Alba Iulia
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl" opacity={0.9}>
              Stomatologie preventivă și minim-invazivă în centrul Alba Iuliei. 
              Echipă tânără de specialiști concentrată pe confortul și calitatea vieții pacienților.
            </Text>
          </MotionVStack>
        </Container>
      </Box>
      
      {/* Services Grid */}
      <Box py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {services.map((service, idx) => (
              <MotionBox
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <VStack
                  bg={cardBg}
                  p={8}
                  borderRadius="2xl"
                  spacing={6}
                  h="full"
                  borderWidth={2}
                  borderColor="transparent"
                  _hover={{
                    borderColor: service.color,
                    transform: 'translateY(-8px)',
                    shadow: '2xl'
                  }}
                  transition="all 0.3s"
                  position="relative"
                  overflow="hidden"
                >                  {/* Header */}
                  <VStack spacing={4}>
                    <Box
                      p={4}
                      bg={useColorModeValue(`${service.color.split('.')[0]}.50`, `${service.color.split('.')[0]}.900`)}
                      borderRadius="2xl"
                      color={service.color}
                    >
                      <Icon as={service.icon} boxSize={12} />
                    </Box>
                    <VStack spacing={2}>
                      <Heading size="lg" color={headingColor} textAlign="center">
                        {service.title}
                      </Heading>
                      <Text color={textColor} textAlign="center" fontSize="md" lineHeight="tall">
                        {service.description}
                      </Text>
                    </VStack>
                  </VStack>
                  
                  {/* Features */}
                  <VStack align="start" spacing={3} w="full">
                    {service.features.map((feature, featureIdx) => (
                      <HStack key={featureIdx} spacing={3} align="start">
                        <Icon as={CheckCircle} boxSize={5} color="green.500" mt={0.5} />
                        <Text color={textColor} fontSize="sm">
                          {feature}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                  
                  {/* Price and CTA */}
                  <VStack spacing={4} w="full">
                    <Box textAlign="center">
                      <Text fontSize="2xl" fontWeight="bold" color={service.color}>
                        {service.price}
                      </Text>
                      <Text fontSize="sm" color={textColor}>
                        *Preț orientativ, consultația include examinarea completă
                      </Text>
                    </Box>
                    <Button
                      colorScheme={service.color.split('.')[0]}
                      size="lg"
                      w="full"
                      rightIcon={<ArrowRight />}
                      onClick={() => onNavigate('contact')}
                    >
                      Programează Consultație
                    </Button>
                  </VStack>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>      
      {/* CTA Section */}
      <Box bg="blue.600" color="white" py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl" textAlign="center">
          <MotionVStack
            spacing={8}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={4}>
              <Heading size={{ base: 'xl', md: '2xl' }}>
                Ai Întrebări Despre Serviciile Noastre?
              </Heading>
              <Text fontSize="xl" maxW="2xl">
                Echipa noastră de specialiști este pregătită să îți răspundă la toate întrebările 
                și să îți ofere consultația de care ai nevoie.
              </Text>
            </VStack>
            
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                size="lg"
                bg="white"
                color="blue.600"
                _hover={{ bg: 'gray.100' }}
                leftIcon={<Phone />}
                as="a"
                href={`tel:${businessInfo.phone}`}
              >
                Sună: {businessInfo.phone}
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
                onClick={() => onNavigate('contact')}
              >
                Programează Online
              </Button>
            </HStack>
          </MotionVStack>
        </Container>
      </Box>
    </Box>
  )
}