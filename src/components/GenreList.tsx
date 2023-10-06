import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'
import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const {data} = useGenres()

  return (
    <List>
        {data.map(genre=> <ListItem key={genre.id} paddingY={'4px'}>
          <HStack display={'flex'} flexDirection={'row'} alignItems={'center'}>
            <Image boxSize='32px' borderRadius={'10px'} src={getCroppedImageUrl(genre.image_background)}/>
            <Text fontSize={'lg'} >{genre.name}</Text></HStack></ListItem>)}
    </List>
  )
}

export default GenreList