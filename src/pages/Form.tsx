import { Grid, GridItem, Image, Show } from '@chakra-ui/react'


import heroImage from '../assets/space-shuttle.webp'
import logo from '../assets/Techopia.webp'
import FormInput from '../components/FormInput'


const Form = () => {
  return (
    <>
        <Grid templateAreas={{
        base: `'main'`,
        lg: `'image main'` // 1024px
      }} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} padding={5}>
        <Show above='lg'>
          <GridItem area='image' width={'50%'} >
            <Image src={heroImage} borderRadius={30}/>
        </GridItem>
        </Show>
        <GridItem area='main' display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-between'} marginRight={10}>
            <Image src={logo} width={70} margin={10}  boxShadow={'0 0 10px #ccc'} borderRadius={9}/>
            <h2>Login</h2>
            <FormInput onSubmit={()=> console.log('submited')}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default Form