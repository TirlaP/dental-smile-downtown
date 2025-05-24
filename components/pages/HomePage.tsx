'use client'

import { AspectRatio, Badge, Box, Button, Container, HStack, Heading, Icon, SimpleGrid, Stack, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { motion } from 'framer-motion'
import { Activity, AlertCircle, ArrowRight, Award, Calendar, CheckCircle, Clock, DollarSign, Heart, PhoneCall, Shield, Sparkles, Star, ThumbsUp, Users } from 'lucide-react'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

// Animații personalizate
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`

interface HomePageProps {
  businessInfo: any
  onNavigate: (page: string) => void
}

export default function HomePage({ businessInfo, onNavigate }: HomePageProps) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('blue.600', 'blue.400')
  const cardBg = useColorModeValue('gray.50', 'gray.700')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const serviceBgHover = useColorModeValue('blue.50', 'blue.900')
  const testimonialBorderColor = useColorModeValue('gray.200', 'gray.600')  
  const services = [
    {
      icon: Heart,
      title: 'Stomatologie Preventivă',
      description: 'Prevenția și diagnosticarea timpurie pentru sănătatea dentară pe termen lung',
      color: 'pink.500'
    },
    {
      icon: Shield,
      title: 'Tratamente Minim-Invazive',
      description: 'Abordare conservatoare cu intervenții delicate și fără durere',
      color: 'green.500'
    },
    {
      icon: Activity,
      title: 'Chirurgie Oro-Maxilo-Facială',
      description: 'Specialitatea Dr. Dîrzu - intervenții chirurgicale de precisie',
      color: 'blue.500'
    },
    {
      icon: Sparkles,
      title: 'Ortodonție',
      description: 'Specialitatea Dr. Slevaș - corectarea malocluziilor pentru toate vârstele',
      color: 'purple.500'
    }
  ]
  
  const whyChooseUs = [
    { icon: Users, text: 'Echipă Tânără de Specialiști' },
    { icon: Heart, text: 'Stomatologie Preventivă și Minim-Invazivă' },
    { icon: Star, text: '100% Recomandă (9 Recenzii)' },
    { icon: Award, text: 'Medici Formați în Universități de Prestigiu' },
    { icon: Shield, text: 'Locație Centrală în Alba Iulia' },
    { icon: CheckCircle, text: 'Tratamente Fără Durere' }
  ]
  
  return (
    <Box bg={bgColor}>
      {/* Hero Section - Dental Focused Design */}
      <Box 
        bg="linear-gradient(135deg, #4C51BF 0%, #667EEA 50%, #764BA2 100%)" 
        color="white" 
        position="relative" 
        overflow="hidden"
        minH="100vh"
      >
        {/* Background Pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.1}
          bgImage={`url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`}
          />
        
        {/* Floating Elements */}
        <Box
          position="absolute"
          top="20%"
          left="10%"
          w="80px"
          h="80px"
          bg="whiteAlpha.200"
          borderRadius="full"
          filter="blur(1px)"
          animation={`${float} 8s ease-in-out infinite`}
        />
        <Box
          position="absolute"
          top="60%"
          right="15%"
          w="60px"
          h="60px"
          bg="whiteAlpha.150"
          borderRadius="full"
          filter="blur(1px)"
          animation={`${float} 6s ease-in-out infinite reverse`}
        />
        
        <Container maxW="container.xl" py={{ base: 16, md: 20 }} position="relative" display="flex" alignItems="center" minH="100vh">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center" w="full">
            {/* Left Content */}
            <MotionVStack 
              align={{ base: 'center', lg: 'start' }} 
              spacing={8} 
              textAlign={{ base: 'center', lg: 'left' }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Trust Badge */}
              <Badge
                bg="whiteAlpha.200"
                color="white"
                px={6}
                py={3}
                fontSize="md"
                fontWeight="bold"
                borderRadius="full"
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="whiteAlpha.300"
                display="flex"
                alignItems="center"
                gap={3}
              >
                <Box w={2} h={2} bg="green.400" borderRadius="full" />
                100% din pacienți ne recomandă
              </Badge>
              
              {/* Main Headline */}
              <VStack spacing={4} align={{ base: 'center', lg: 'start' }}>
                <Heading
                  as="h1"
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl', xl: '6xl' }}
                  fontWeight="black"
                  lineHeight="shorter"
                  letterSpacing="-0.02em"
                >
                  E timpul să
                  <Text as="span" 
                    bgGradient="linear(to-r, #FED7D7, #FEEBC8, #E6FFFA)"
                    bgClip="text"
                    display="block"
                  >
                    zâmbești din nou!
                  </Text>
                </Heading>
                <Text 
                  fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} 
                  fontWeight="medium"
                  opacity={0.95}
                  maxW="600px"
                  lineHeight="tall"
                >
                  Echipă tânără de specialiști în centrul Alba Iuliei. 
                  Stomatologie preventivă, minim-invazivă, fără durere.
                </Text>
              </VStack>
              
              {/* CTA Buttons */}
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} pt={2} w={{ base: 'full', sm: 'auto' }}>
                <Button
                  size={{ base: 'lg', md: 'xl' }}
                  h={{ base: '50px', md: '60px' }}
                  px={{ base: 6, md: 8 }}
                  bg="white"
                  color="purple.700"
                  fontWeight="bold"
                  fontSize={{ base: 'md', md: 'lg' }}
                  _hover={{ 
                    transform: 'translateY(-2px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                  }}
                  leftIcon={<Calendar size={20} />}
                  w={{ base: 'full', sm: 'auto' }}
                  transition="all 0.3s"
                  borderRadius="2xl"
                  boxShadow="0 10px 30px rgba(0,0,0,0.2)"
                  onClick={() => onNavigate('contact')}
                >
                  Programează Consultația
                </Button>
                <Button
                  size={{ base: 'lg', md: 'xl' }}
                  h={{ base: '50px', md: '60px' }}
                  px={{ base: 6, md: 8 }}
                  variant="outline"
                  borderColor="white"
                  borderWidth={2}
                  color="white"
                  fontWeight="bold"
                  fontSize={{ base: 'md', md: 'lg' }}
                  _hover={{ 
                    bg: 'whiteAlpha.200',
                    transform: 'translateY(-2px)'
                  }}
                  leftIcon={<PhoneCall size={20} />}
                  as="a"
                  href={`tel:${businessInfo.phone}`}
                  w={{ base: 'full', sm: 'auto' }}
                  transition="all 0.3s"
                  borderRadius="2xl"
                  backdropFilter="blur(10px)"
                >
                  {businessInfo.phone}
                </Button>
              </Stack>
              
              {/* Stats */}
              <HStack spacing={8} pt={6} flexWrap="wrap" justify={{ base: 'center', lg: 'start' }}>
                <VStack spacing={1}>
                  <HStack>
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} as={Star} boxSize={4} color="yellow.300" fill="yellow.300" />
                    ))}
                  </HStack>
                  <Text fontSize="sm" fontWeight="medium" opacity={0.9}>
                    100% Recomandă
                  </Text>
                </VStack>
                <VStack spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold">
                    5+
                  </Text>
                  <Text fontSize="sm" fontWeight="medium" opacity={0.9}>
                    Ani experiență
                  </Text>
                </VStack>
                <VStack spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold">
                    9
                  </Text>
                  <Text fontSize="sm" fontWeight="medium" opacity={0.9}>
                    Recenzii perfecte
                  </Text>
                </VStack>
              </HStack>
            </MotionVStack>
            
            {/* Right Visual Element */}
            <MotionBox 
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              position="relative"
            >
              {/* Main Patient Image Container */}
              <Box position="relative" w="full" h="600px">
                {/* Central 3D Tooth */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  w="200px"
                  h="200px"
                  zIndex={2}
                >
                  <Box
                    w="full"
                    h="full"
                    bg="white"
                    borderRadius="50% 50% 50% 50% / 60% 60% 40% 40%"
                    position="relative"
                    boxShadow="0 20px 40px rgba(0,0,0,0.3)"
                    animation={`${float} 4s ease-in-out infinite`}
                    _before={{
                      content: '""',
                      position: 'absolute',
                      top: '20%',
                      left: '20%',
                      right: '20%',
                      bottom: '40%',
                      bg: 'linear-gradient(145deg, #f0f0f0, #ffffff)',
                      borderRadius: '50%'
                    }}
                  >
                    {/* Orbital Rings */}
                    <Box
                      position="absolute"
                      top="-20px"
                      left="-20px"
                      right="-20px"
                      bottom="-20px"
                      border="2px solid"
                      borderColor="whiteAlpha.400"
                      borderRadius="full"
                      animation={`${float} 8s linear infinite`}
                    />
                    <Box
                      position="absolute"
                      top="-40px"
                      left="-40px"
                      right="-40px"
                      bottom="-40px"
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                      borderRadius="full"
                      animation={`${float} 12s linear infinite reverse`}
                    />
                  </Box>
                </Box>
                
                {/* Patient Photos */}
                <MotionBox
                  position="absolute"
                  top="10%"
                  right="10%"
                  w="150px"
                  h="150px"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Box
                    w="full"
                    h="full"
                    bg="whiteAlpha.200"
                    borderRadius="2xl"
                    backdropFilter="blur(10px)"
                    border="2px solid"
                    borderColor="whiteAlpha.300"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    overflow="hidden"
                  >
                    <VStack spacing={2} color="white" textAlign="center">
                      <Box
                        w={12}
                        h={12}
                        bg="green.400"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Sparkles size={24} />
                      </Box>
                      <Text fontSize="sm" fontWeight="bold">
                        Zâmbet perfect
                      </Text>
                    </VStack>
                  </Box>
                </MotionBox>
                
                <MotionBox
                  position="absolute"
                  bottom="15%"
                  left="5%"
                  w="130px"
                  h="130px"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Box
                    w="full"
                    h="full"
                    bg="whiteAlpha.200"
                    borderRadius="2xl"
                    backdropFilter="blur(10px)"
                    border="2px solid"
                    borderColor="whiteAlpha.300"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    overflow="hidden"
                  >
                    <VStack spacing={2} color="white" textAlign="center">
                      <Box
                        w={10}
                        h={10}
                        bg="blue.400"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Shield size={20} />
                      </Box>
                      <Text fontSize="xs" fontWeight="bold">
                        Tratament sigur
                      </Text>
                    </VStack>
                  </Box>
                </MotionBox>
              </Box>
            </MotionBox>
          </SimpleGrid>
        </Container>
        
        {/* Bottom Wave */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          h="100px"
          bg={bgColor}
          sx={{
            clipPath: 'polygon(0 50%, 100% 80%, 100% 100%, 0 100%)'
          }}
        />
      </Box>      
      {/* Services Section */}
      <Box py={{ base: 16, md: 20 }} bg={bgColor}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <MotionVStack 
              spacing={4} 
              textAlign="center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge colorScheme="blue" fontSize="sm" px={3} py={1}>
                SERVICII PROFESIONALE
              </Badge>
              <Heading size="xl" color={headingColor}>
                Serviciile Noastre Stomatologice
              </Heading>
              <Text fontSize="lg" color={textColor} maxW="2xl">
                De la urgențe stomatologice la tratamente estetice complexe, oferim soluții moderne 
                pentru toate nevoile tale de sănătate dentară.
              </Text>
            </MotionVStack>
            
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6} w="full">
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
                    borderRadius="xl"
                    spacing={4}
                    h="full"
                    borderWidth={1}
                    borderColor={borderColor}
                    position="relative"
                    overflow="hidden"
                    _hover={{
                      borderColor: service.color,
                      transform: 'translateY(-8px)',
                      shadow: 'xl'
                    }}
                    transition="all 0.3s"
                    cursor="pointer"
                    onClick={() => onNavigate('services')}
                  >                    {/* Gradient decorativ */}
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      h="3px"
                      bg={`linear-gradient(90deg, ${service.color} 0%, transparent 100%)`}
                    />
                    
                    <Box
                      p={4}
                      bg={serviceBgHover}
                      color={service.color}
                      borderRadius="full"
                    >
                      <Icon as={service.icon} boxSize={8} />
                    </Box>
                    <Heading size="md" color={headingColor} textAlign="center">
                      {service.title}
                    </Heading>
                    <Text color={textColor} textAlign="center" fontSize="sm" lineHeight="tall">
                      {service.description}
                    </Text>
                    <Box pt={2}>
                      <Text fontSize="sm" color={service.color} fontWeight="bold">
                        Află mai multe →
                      </Text>
                    </Box>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
            
            <Button
              size="lg"
              colorScheme="blue"
              onClick={() => onNavigate('services')}
              rightIcon={<ArrowRight />}
              _hover={{ transform: 'scale(1.05)' }}
              transition="all 0.3s"
            >
              Vezi Toate Serviciile
            </Button>
          </VStack>
        </Container>
      </Box>      
      {/* Why Choose Us */}
      <Box bg={cardBg} py={{ base: 16, md: 20 }} position="relative">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <AspectRatio ratio={4/3}>
                <Box
                  bg="linear-gradient(135deg, #3182ce 0%, #2c5282 100%)"
                  borderRadius="2xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  gap={4}
                  color="white"
                  position="relative"
                  overflow="hidden"
                >
                  <Box
                    position="absolute"
                    top="-50%"
                    right="-50%"
                    width="100%"
                    height="100%"
                    bg="whiteAlpha.200"
                    borderRadius="full"
                    filter="blur(40px)"
                  />
                  <Icon as={Award} boxSize={20} />
                  <VStack spacing={2}>
                    <Text fontSize="4xl" fontWeight="bold">
                      {businessInfo.yearsInBusiness}+
                    </Text>
                    <Text fontSize="lg" textAlign="center" px={4}>
                      Ani de Excelență în Stomatologie
                    </Text>
                  </VStack>
                </Box>
              </AspectRatio>
            </MotionBox>            
            <MotionVStack 
              align="start" 
              spacing={6}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box>
                <Text
                  color={accentColor}
                  fontWeight="bold"
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  mb={2}
                >
                  DE CE SĂ NE ALEGI
                </Text>
                <Heading size="xl" color={headingColor} mb={4}>
                  Clinica Ta de Încredere din Centrul Alba Iuliei
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="tall">
                  Suntem o echipă tânără de specialiști, formați în universități de prestigiu. 
                  Dr. Andrei Dîrzu și Dr. Amalia Slevaș promovează conceptele de stomatologie 
                  preventivă și minim-invazivă, concentrată pe confortul pacienților și 
                  îmbunătățirea calității vieții.
                </Text>
              </Box>
              
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3} w="full">
                {whyChooseUs.map((item, idx) => (
                  <HStack key={idx} spacing={3} align="start">
                    <Icon as={CheckCircle} boxSize={5} color="green.500" mt={0.5} />
                    <Text color={textColor} fontSize="sm">
                      {item.text}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
              
              <Button
                colorScheme="blue"
                size="lg"
                onClick={() => onNavigate('about')}
                rightIcon={<ArrowRight />}
                _hover={{ transform: 'scale(1.05)' }}
                transition="all 0.3s"
              >
                Află Mai Multe Despre Noi
              </Button>
            </MotionVStack>
          </SimpleGrid>
        </Container>
      </Box>      
      {/* Testimonials */}
      <Box py={{ base: 16, md: 20 }} bg={bgColor}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <MotionVStack 
              spacing={4} 
              textAlign="center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge colorScheme="green" fontSize="sm" px={3} py={1}>
                TESTIMONIALE PACIENȚI
              </Badge>
              <Heading size="xl" color={headingColor}>
                Ce Spun Pacienții Noștri
              </Heading>
              <Text fontSize="lg" color={textColor}>
                100% din pacienți ne recomandă - fără excepție!
              </Text>
            </MotionVStack>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {[
                {
                  name: 'Miruna Slevaș',
                  role: 'Pacient, Alba Iulia',
                  text: 'Totul la superlativ! Medicii sunt foarte atenți la nevoile tale și te fac să te simți în siguranță. Atât plomba făcută, cât și detartrajul au fost făcute foarte finuț, fără durere. Atmosfera foarte plăcută!',
                  rating: 5,
                  treatment: 'Stomatologie Generală'
                },
                {
                  name: 'Delia Danciu',
                  role: 'Pacient, Alba Iulia',
                  text: 'Medicii sunt tineri profesioniști cu o energie foarte plăcută. Atmosfera prietenoasă și grija lor pentru detalii m-au făcut să mă simt în largul meu de la prima vizită. Extrem de atenți la nevoile pacienților.',
                  rating: 5,
                  treatment: 'Consultație'
                },
                {
                  name: 'Emanuel Slevaș',
                  role: 'Pacient, Alba Iulia',
                  text: 'Tratamente fără dureri! Cei mai buni de pe piață! Echipa este de un profesionalism desăvârșit, lucrând cu multă pasiune și dăruire. Sunt incredibil de răbdători și atenți la detalii.',
                  rating: 5,
                  treatment: 'Tratament Preventiv'
                }
              ].map((testimonial, idx) => (
                <MotionBox
                  key={idx}
                  bg={cardBg}
                  p={8}
                  borderRadius="2xl"
                  borderWidth={1}
                  borderColor={borderColor}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  _hover={{ 
                    shadow: '2xl',
                    transform: 'translateY(-4px)',
                    borderColor: 'blue.300'
                  }}
                  position="relative"
                  overflow="hidden"
                >
                  {/* Top gradient accent */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    h="4px"
                    bg="linear-gradient(90deg, #4C51BF 0%, #667EEA 50%, #764BA2 100%)"
                  />
                  
                  {/* Quote mark */}
                  <Box
                    position="absolute"
                    top={6}
                    right={6}
                    w={8}
                    h={8}
                    bg="blue.500"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    &quot;
                  </Box>
                  
                  <VStack align="start" spacing={5} pt={4}>
                    {/* Rating */}
                    <HStack spacing={1}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} as={Star} boxSize={4} color="yellow.400" fill="yellow.400" />
                      ))}
                    </HStack>
                    
                    {/* Treatment badge */}
                    <Badge colorScheme="blue" fontSize="xs" px={3} py={1} borderRadius="full">
                      {testimonial.treatment}
                    </Badge>
                    
                    {/* Testimonial text */}
                    <Text 
                      color={textColor} 
                      fontSize="md" 
                      lineHeight="tall"
                      fontStyle="italic"
                    >
                      {testimonial.text}
                    </Text>
                    
                    {/* Patient info */}
                    <Box pt={2} borderTop="1px solid" borderColor={testimonialBorderColor} w="full">
                      <Text fontWeight="bold" color={headingColor} fontSize="md">
                        {testimonial.name}
                      </Text>
                      <Text fontSize="sm" color={textColor} opacity={0.8}>
                        {testimonial.role}
                      </Text>
                    </Box>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>      
      {/* CTA Section */}
      <Box 
        bg="linear-gradient(135deg, #4C51BF 0%, #667EEA 50%, #764BA2 100%)" 
        color="white" 
        py={{ base: 16, md: 20 }}
        position="relative"
        overflow="hidden"
      >
        {/* Background Pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.1}
          bgImage={`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='15'/%3E%3C/g%3E%3C/svg%3E")`}
          />
        
        {/* Floating dental elements */}
        <Box
          position="absolute"
          top="20%"
          right="15%"
          w="40px"
          h="40px"
          bg="whiteAlpha.200"
          borderRadius="50% 50% 50% 50% / 60% 60% 40% 40%"
          animation={`${float} 6s ease-in-out infinite`}
        />
        <Box
          position="absolute"
          bottom="30%"
          left="10%"
          w="30px"
          h="30px"
          bg="whiteAlpha.150"
          borderRadius="50% 50% 50% 50% / 60% 60% 40% 40%"
          animation={`${float} 8s ease-in-out infinite reverse`}
        />
        
        <Container maxW="container.xl" textAlign="center" position="relative">
          <MotionVStack 
            spacing={8}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={6}>
              <Badge
                bg="whiteAlpha.200"
                color="white"
                px={6}
                py={3}
                fontSize="md"
                fontWeight="bold"
                borderRadius="full"
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="whiteAlpha.300"
                display="flex"
                alignItems="center"
                gap={3}
              >
                <Heart size={16} />
                ÎNCEPE TRANSFORMAREA TA
              </Badge>
              
              <Heading size={{ base: 'xl', md: '2xl' }} maxW="4xl" lineHeight="shorter">
                Zâmbetul perfect începe cu o
                <Text as="span" color="yellow.300"> consultație gratuită</Text>
              </Heading>
              
              <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl" lineHeight="tall" opacity={0.95}>
                Nu mai amâna! Programează-te astăzi pentru o consultație completă și 
                descoperă cum putem transforma zâmbetul tău în doar câteva ședințe.
              </Text>
              
              {/* Benefits */}
              <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} pt={4} w="full">
                <HStack justify="center">
                  <Icon as={CheckCircle} boxSize={5} color="green.300" />
                  <Text fontWeight="medium">Consultație gratuită</Text>
                </HStack>
                <HStack justify="center">
                  <Icon as={Shield} boxSize={5} color="blue.300" />
                  <Text fontWeight="medium">Fără durere</Text>
                </HStack>
                <HStack justify="center">
                  <Icon as={Award} boxSize={5} color="yellow.300" />
                  <Text fontWeight="medium">Garanție pe viață</Text>
                </HStack>
              </SimpleGrid>
            </VStack>
            
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify="center">
              <Button
                size={{ base: 'lg', md: 'xl' }}
                h={{ base: '50px', md: '60px' }}
                px={{ base: 6, md: 10 }}
                bg="white"
                color="purple.700"
                fontWeight="bold"
                fontSize={{ base: 'md', md: 'lg' }}
                _hover={{ 
                  transform: 'translateY(-2px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
                leftIcon={<Calendar size={20} />}
                onClick={() => onNavigate('contact')}
                transition="all 0.3s"
                borderRadius="2xl"
                boxShadow="0 10px 30px rgba(0,0,0,0.2)"
                w={{ base: 'full', sm: 'auto' }}
              >
                <Text display={{ base: 'none', sm: 'inline' }}>Programează Consultația Gratuită</Text>
                <Text display={{ base: 'inline', sm: 'none' }}>Programează Consultația</Text>
              </Button>
              <Button
                size={{ base: 'lg', md: 'xl' }}
                h={{ base: '50px', md: '60px' }}
                px={{ base: 6, md: 8 }}
                variant="outline"
                borderColor="white"
                borderWidth={2}
                color="white"
                fontWeight="bold"
                fontSize={{ base: 'md', md: 'lg' }}
                _hover={{ 
                  bg: 'whiteAlpha.200',
                  transform: 'translateY(-2px)'
                }}
                leftIcon={<PhoneCall size={20} />}
                as="a"
                href={`tel:${businessInfo.phone}`}
                transition="all 0.3s"
                borderRadius="2xl"
                backdropFilter="blur(10px)"
                w={{ base: 'full', sm: 'auto' }}
              >
                <Text display={{ base: 'none', sm: 'inline' }}>Sună: </Text>
                {businessInfo.phone}
              </Button>
            </Stack>
            
            {/* Trust signals */}
            <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} pt={4} opacity={0.9} w="full">
              <Text fontSize="sm" textAlign="center">✓ Peste 3000 de pacienți fericiți</Text>
              <Text fontSize="sm" textAlign="center">✓ 12+ ani de experiență</Text>
              <Text fontSize="sm" textAlign="center">✓ Echipamente de ultimă generație</Text>
            </SimpleGrid>
          </MotionVStack>
        </Container>
      </Box>
    </Box>
  )
}