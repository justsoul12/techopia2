import { Avatar, AvatarGroup, Button, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList,  } from "@chakra-ui/react"
import Form from "../pages/Form"


const profile = () => {
    return (
        <AvatarGroup spacing='1rem'>
            
        <Menu>
            <MenuButton as={Button} colorScheme='green'>
                Profile
            </MenuButton>
            <MenuList>
                <MenuGroup title='Profile'>
                    <MenuItem><a href="/dashboard">Dashboard</a></MenuItem>
                    <MenuItem color={'red.400'}><a href="/">Log out</a></MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Help'>
                    <MenuItem>Docs</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
        
        </AvatarGroup>
    )
}

export default profile