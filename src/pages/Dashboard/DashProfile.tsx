import { Avatar, Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, HStack, Heading, SimpleGrid, Stack, StackDivider, Text, Wrap, WrapItem } from "@chakra-ui/react"


const DashProfile = () => {
  return (
    <div>
        
       <HStack marginLeft={'5rem'}>
            <div>
            <Card maxW='sm'>
  <CardBody>
        <Wrap>
            <WrapItem>
                <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
            </WrapItem>
        </Wrap>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Grade 11
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Update 
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
            </div>
           <Card align='center' marginTop={'2.7rem'}>
                <CardHeader>
                    <Heading size='md'>Alazar Profile</Heading>
                </CardHeader>
                <CardBody>
                <Card>
  <CardHeader>
    <Heading size='md'>Client Report</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Summary
        </Heading>
        <Text pt='2' fontSize='sm'>
          View a summary of all your clients over the last month.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Overview
        </Heading>
        <Text pt='2' fontSize='sm'>
          Check out the overview of your clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue'>View More</Button>
                </CardFooter>
            </Card>
       </HStack>
       <div>
       <Text fontSize={'3rem'} marginLeft={'15rem'} marginTop={'4rem'}>Projects</Text>
       <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' marginTop={'5rem'} marginLeft={'5rem'}>
       
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
       </div>
    </div>
  )
}

export default DashProfile