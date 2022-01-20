import {
  Box, Img, Heading, useColorModeValue, Button, Spacer, VStack, HStack, Text
} from '@chakra-ui/react'
import { MdArrowForward } from 'react-icons/md'

export const MainHeading = ({ image }) => (
  <Box
    bg={useColorModeValue('rgba(255,255,255,0.7)', 'rgba(17,17,18,255.7)')}
    borderColor="transparent"
    pos="relative"
    h={["80vh", "80vh", "100vh", "100vh"]}
  >
    <Box 
      pos="absolute"
      left={0}
      right={0}
      top={0}
      bottom={0}
    >
      <Img src={image} h="80vh" align="right" display={["none", "flex", "flex", "flex"]} />
      <VStack>
        <VStack align="left">
          <Heading fontWeight="bold" fontSize={32} color="white" mb={8}>The XRP Ledger: A Scalable,<br /> Sustainable Blockchain</Heading>
          <Text fontSize={24} color="white">The XRP Ledger (XRPL) is a <br/>decentralized, public <br />blockchain led by a global <br />developer community.</Text>
          <Text fontSize={16} color="white" mt={8}>It’s fast, energy efficient, and reliable. With <br />ease of development, low transaction costs, <br />and a knowledgeable community, it provides <br />developers with a strong open-source <br />foundation for executing on the most <br />demanding projects—without hurting the <br />environment.</Text>
        </VStack>
      </VStack>
    </Box>
  </Box>

)