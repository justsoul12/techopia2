import { Box, Grid, Show, GridItem, Flex, Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Text, Image, HStack } from '@chakra-ui/react'

import GenreList from '../components/GenreList'

const HomePage = () => {
  return (
    <Grid
    templateAreas={{
      base: `"main"`,
      lg: `"aside main"`,
    }}
    templateColumns={{
      base: '1fr',
      lg: '250px 1fr',
    }}
  >
    <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <GenreList />
      </GridItem>
    </Show>
    <GridItem area="main">
      <Box paddingLeft={2}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto porro alias possimus excepturi, aspernatur hic, eum fugiat quis labore doloribus, vitae maxime reiciendis quibusdam quo eveniet nihil provident pariatur atque.
        <HStack>
          <Flex marginBottom={5} marginTop={'3rem'}>
            <Box marginRight={5}>
            <Card maxW='sm'>
            <CardBody>
              <Image
                src='../src/assets/CardImg/MarsRover.jpg'
                alt='Mars Rover'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'> Concept of Rover on Mars</Heading>
                <Text>
                An artist concept portrays a NASA Mars Exploration Rover on the surface of Mars. 
                Two rovers were launched in 2003 and arrived at sites on Mars in January 2004.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
          Intermidate
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
          Enroll Now
                </Button>
                
              </ButtonGroup>
            </CardFooter>
          </Card>
            </Box>
          
          </Flex>
          <Flex marginBottom={5} marginTop={'3rem'}>
            <Box marginRight={5}>
            <Card maxW='sm'>
            <CardBody>
              <Image
                src='../src/assets/CardImg/SatOutside.jpg'
                alt='Mars Rover'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'> Proposed Missions - Terrestrial Planet Finder</Heading>
                <Text>
                NASA Terrestrial Planet Finder will use multiple telescopes working together to 
                take family portraits of stars and their orbiting planets and determine which planets may have the right chemistry to sustain life.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
          Intermidate
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
          Enroll Now
                </Button>
                
              </ButtonGroup>
            </CardFooter>
          </Card>
            </Box>
          
          </Flex>
          <Flex marginBottom={5} marginTop={'3rem'}>
            <Box marginRight={5}>
            <Card maxW='sm'>
            <CardBody>
              <Image
                src='../src/assets/CardImg/AstrobioCard.jpg'
                alt='Mars Rover'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'> 50 Years of Exobiology and Astrobiology at NASA</Heading>
                <Text>
                James L. Green, Director for Planetary Science in NASA's Science Mission Directorate, helps kick off the "Seeking Signs of Life" Symposium, celebrating 50 Years of Exobiology and Astrobiology at NASA, 
                Thursday, Oct. 14, 2010, at the Lockheed Martin Global Vision Center in Arlington, Va.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
          Intermidate
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
          Enroll Now
                </Button>
                
              </ButtonGroup>
            </CardFooter>
          </Card>
            </Box>
          
          </Flex>
        </HStack>
      </Box>
      Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quasi.
    </GridItem>
  </Grid>
  )
}

export default HomePage