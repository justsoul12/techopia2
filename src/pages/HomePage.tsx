import { Box, Grid, Show, GridItem, Flex } from '@chakra-ui/react'

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
        Heading
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            Patform
          </Box>
          Hi
        </Flex>
      </Box>
      Hello
    </GridItem>
  </Grid>
  )
}

export default HomePage