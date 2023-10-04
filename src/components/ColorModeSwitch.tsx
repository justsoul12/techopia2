import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'


const ColorModeSwitch = () => {

   const {toggleColorMode, colorMode} = useColorMode();


  return (
    <HStack display={'flex'} flexDirection={'row'} alignItems={'center'}>
        <Switch colorScheme={'green'} isChecked={colorMode==='dark'} onChange={toggleColorMode}/>
        <Text fontWeight={700} marginTop={'25px'}>{colorMode==='dark' ? 'Dark' : 'Light '} Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch