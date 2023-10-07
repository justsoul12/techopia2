import { Avatar, AvatarGroup, VStack, Button} from "@chakra-ui/react"
import { AiOutlineUser} from 'react-icons/ai'


const SideBar = () => {
  return (
    <>
        <VStack marginRight={'5rem'}>
            <AvatarGroup spacing='1rem'>
                <Avatar bg='teal.500' />
            </AvatarGroup>
            <div>
            <VStack>
                <Button variant='ghost' colorScheme='blue' marginTop={'2.5rem'}>
                     Profile
                </Button>
                <Button variant='ghost' colorScheme='red'>
                     Log Out
                </Button>
            </VStack>
            </div>
        </VStack>

    </>
  )
}

export default SideBar