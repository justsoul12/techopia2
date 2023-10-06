import { Button, HStack, Image, List, ListItem, Spinner} from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'
import useGenres, { Genre } from '../hooks/useGenres'

interface Prpos {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre }:Prpos) => {
    const {data, isLoading, error} = useGenres()

    if(error) return null;

    if(isLoading) return <Spinner/>

  return (
    <List>
        {data.map(genre=> <ListItem key={genre.id} paddingY={'4px'} display={'flex'} flexDirection={'row'} alignItems={'center'}>
          <HStack >
            <Image boxSize='32px' borderRadius={'10px'} src={getCroppedImageUrl(genre.image_background)}/>
            <Button fontWeight={genre.id===selectedGenre?.id ? 'bold': 'normal'} onClick={()=> onSelectGenre(genre)} fontSize={'lg'} variant={'link'} paddingLeft={'7px'} textAlign={'center'} flexWrap={'wrap'} >{genre.name}</Button></HStack></ListItem>)}
    </List>
  )
}

export default GenreList