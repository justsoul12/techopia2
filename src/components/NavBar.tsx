import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import Profile from './profile';


const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit='cover' />
      </Link>
      <SearchInput />
      <Profile/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
