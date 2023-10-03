import { HStack, Image , Text} from "@chakra-ui/react"


import logo from '../assets/Techopia.webp'


const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize={'60px'} margin={'10px'}/>
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar