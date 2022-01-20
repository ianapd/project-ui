import { Fragment } from "react/cjs/react.production.min"
import Head from 'next/head'
import { useState } from "react"
import { Header, AppLinks } from '../components/Header'
import { HStack, useColorMode, Input, InputGroup, InputLeftElement, IconButton, Spacer, Box, Flex, Button, Text } from '@chakra-ui/react'
import { BiSearch, BiSun } from 'react-icons/bi'
import { MdNightlightRound } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdArrowForwardIos } from 'react-icons/md'

const AppLayout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [display, changeDisplay] = useState("none")

  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;500;600;700&display=swap" rel="stylesheet" />  
      </Head>
      <Header mode={colorMode} mt={2}>
        <AppLinks logo="https://xrpl.org/assets/img/XRPLedger_DevPortal-white.svg" />
        <Spacer />
        <Flex align="center" w="100%" display={["none", "none", "flex", "flex"]}>
          <Button size="sm" variant="ghost" ml={8} mr={8} fontSize={18} color="white">About</Button>
          <Button size="sm" variant="ghost" ml={8} mr={8} fontSize={18} color="white">Docs</Button>
          <Button size="sm" variant="ghost" ml={8} mr={8} fontSize={18} color="white">Community</Button>
          <HStack align="center">
            <InputGroup w="40vw">
              <InputLeftElement 
                children={<BiSearch size="20px" color="white" />}
                h="5vh"
                w="5vw"
                pr={8}
              />
              <Input type='text' placeholder='Search Site...' borderRadius="lg" borderWidth="0px" bgColor="darkGrey" h="5vh" w="40vw" />
            </InputGroup>
            <IconButton
                size="lg"
                variant="ghost"
                onClick={toggleColorMode}
                color="white"
                icon={colorMode === 'light' ? <MdNightlightRound /> : <BiSun />}
              />
          </HStack>
        </Flex>
        <IconButton
          mr={4}
          mt={2}
          size="sm"
          variant="ghost"
          icon={<GiHamburgerMenu size="sm" color="white" />} 
          display={["flex", "flex", "none", "none"]}
          onClick={() => {changeDisplay('flex')}}
        />
        <Flex
          w="100vw"
          bgColor="darkBlack"
          zIndex={20}
          h="40vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
          display={display}
          >
          <Flex justify="flex-end" mt={8}>
            <AppLinks logo="https://xrpl.org/assets/img/XRPLedger_DevPortal-white.svg" />
            <Spacer />
            <IconButton 
              mt={2}
              mr={4}
              size="sm"
              variant="ghost"
              icon={<AiOutlineClose size="sm" color="white" />} 
              onClick={() => {changeDisplay('none')}}
            />
          </Flex>
          <Flex
            flexDir="column"
            align="left"
            mt={4}
            mx={8}
          >
            <InputGroup w="85vw" pb={4}>
              <InputLeftElement 
                children={<BiSearch size="20px" color="white" />}
                pt={1}
                pb={2}
                pr={4}
                pl={2}
              />
              <Input type='text' placeholder='Search Site...' borderRadius="lg" borderWidth="0px" bgColor="darkGrey" h="5vh" w="85vw" />
            </InputGroup>
            <Box as="button" pb={4}>
              <HStack>
                <Text color="white" fontSize="18">About</Text>
                <Spacer />
                <MdArrowForwardIos color="darkViolet" pb={4}/>
              </HStack>
            </Box> 
            <Box as="button" pb={4}>
              <HStack>
                <Text color="white" fontSize="18">Docs</Text>
                <Spacer />
                <MdArrowForwardIos color="darkViolet" pb={4}/>
              </HStack>
            </Box> 
            <Box as="button" pb={4}>
              <HStack>
                <Text color="white" fontSize="18">Community</Text>
                <Spacer />
                <MdArrowForwardIos color="darkViolet" pb={4}/>
              </HStack>
            </Box> 
            <Box as="button" pb={4}>
              <HStack>
                {colorMode === 'light' ? <MdNightlightRound /> : <BiSun />}
                <Text color="white" fontSize="18">Light/Dark Theme</Text>
              </HStack>
            </Box>
          </Flex>
        </Flex>

      </Header>
      { children }
    </Fragment>
  )
}

export default AppLayout