import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner
} from '@chakra-ui/react';


const GenreList = () => {


  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Category
      </Heading>
      <List>
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src='../src/assets/categoryImg/EarthGenres.jpg'
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="md"
                variant="link"
              >
                Earth Science
              </Button>
            </HStack>
          </ListItem>
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src='../src/assets/categoryImg/PlanetGenres.jpg'
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="md"
                variant="link"
              >
                Planetary Science
              </Button>
            </HStack>
          </ListItem>
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src='../src/assets/categoryImg/SunGenres.jpg'
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="md"
                variant="link"
              >
                Heliophysics
              </Button>
            </HStack>
          </ListItem>
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src='../src/assets/categoryImg/AstrophysicsGenres.jpg'
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="md"
                variant="link"
              >
                Astrophysics
              </Button>
            </HStack>
          </ListItem>
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src='../src/assets/categoryImg/AeroGenres.jpg'
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="md"
                variant="link"
              >
                Aeronautics
              </Button>
            </HStack>
          </ListItem>
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src='../src/assets/categoryImg/FlightGenres.jpg'
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="md"
                variant="link"
              >
                Human Spaceflight
              </Button>
            </HStack>
          </ListItem>
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src='../src/assets/categoryImg/SpaceTechGenres.jpg'
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="md"
                variant="link"
              >
                Space Technology
              </Button>
            </HStack>
          </ListItem>
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src='../src/assets/categoryImg/RoboticsGenres.jpg'
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="md"
                variant="link"
              >
                Space Exploration
              </Button>
            </HStack>
          </ListItem>
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src='../src/assets/categoryImg/AtmGenres.jpg'
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="md"
                variant="link"
              >
                Atmospheric Science
              </Button>
            </HStack>
          </ListItem>
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src='../src/assets/categoryImg/AstrobiologyGenres.jpg'
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="md"
                variant="link"
              >
                Astrobiology
              </Button>
            </HStack>
          </ListItem>
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src='../src/assets/categoryImg/PropGenres.jpg'
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="md"
                variant="link"
              >
                Propulsion Systems
              </Button>
            </HStack>
          </ListItem>
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src='../src/assets/categoryImg/PowerGenres.jpg'
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="md"
                variant="link"
              >
                Power Systems
              </Button>
            </HStack>
          </ListItem>
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src='../src/assets/categoryImg/MaterialGenres.jpg'
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="md"
                variant="link"
              >
                Material Science
              </Button>
            </HStack>
          </ListItem>
        
      </List>
    </>
  );
};

export default GenreList;
