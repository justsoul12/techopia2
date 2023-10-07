import {VStack, HStack,} from '@chakra-ui/react'
import SideBar from '../Dashboard/SideBar'
import Profile from '../Dashboard/DashProfile'

const DashLayout = () => {
  return (
    <>
    <HStack>
      <VStack><SideBar/></VStack>
      <VStack>
        <Profile/>
      </VStack>
    </HStack>
    
    </>
  )
}

export default DashLayout