import {
  Box, Img, Heading, useColorModeValue, Button, Spacer, VStack, HStack, Flex, Center
} from '@chakra-ui/react'
import { MdArrowForward } from 'react-icons/md'

export const MainImage = ({ image, leftImage }) => (
  <Box
    bg={useColorModeValue('rgba(255,255,255,0.7)', 'rgba(17,17,18,255.7)')}
    borderColor="transparent"
    pos="relative"
    h={["80vh", "80vh", "150vh", "150vh"]}
  >
    <Box 
      pos="absolute"
      left={0}
      right={0}
      top={0}
      bottom={0}
    >
      <Center>
        <Img src={image} h={["30vh", "30vh", "80vh", "80vh"]} w="80vw" />
      </Center>
      <Img src={leftImage} h="75vh" align="left" display={["none", "none", "flex", "flex"]} />
      <VStack align="center">
          <Heading fontWeight="bold" fontSize={20} color="white" mb={4}>XRPL | XRP Ledger</Heading>
          <Heading fontWeight="bold" fontSize={62} color="white" textAlign="center">Community <br />Powered Utility</Heading>
          <Spacer />
          <Button rightIcon={<MdArrowForward size="24px"/>} fontWeight="bold" fontSize={14} bgColor="lightViolet" color="white" px={4} w="11vw" h="6vh" borderRadius="lg">
            Start Building
          </Button>
      </VStack>
    </Box>
  </Box>

)