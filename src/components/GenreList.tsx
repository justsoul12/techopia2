import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'
import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const {data, isLoading, error} = useGenres()

    if(error) return null;

    if(isLoading) return <Spinner/>

  return (
    <List>
        {data.map(genre=> <ListItem key={genre.id} paddingY={'4px'} display={'flex'} flexDirection={'row'} alignItems={'center'}>
          <HStack >
            <Image boxSize='32px' borderRadius={'10px'} src={getCroppedImageUrl(genre.image_background)}/>
            <Text fontSize={'lg'} >{genre.name}</Text></HStack></ListItem>)}
    </List>
  )
}

export default GenreList