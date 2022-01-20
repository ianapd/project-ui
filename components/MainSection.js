import {
  Box, HStack, Img, Heading, useColorModeValue, Container, Button, Spacer, Flex, VStack, Center
} from '@chakra-ui/react'
import { MdArrowForward } from 'react-icons/md'

export const MainSection = ({ leftImg, rightImg, centerImg }) => (
  <Box 
    bg={useColorModeValue('rgba(255,255,255,0.7)', 'rgba(17,17,18,255.7)')}
    borderColor="transparent"
    >
      <Img src={centerImg} h="600px" w="100%"></Img>
      <Flex pos="relative">
        <Flex flex="2">
          <Img src={leftImg} h="750px" ></Img>
        </Flex>
        <Flex flex="3" align="center">
          <VStack>
            <Heading fontWeight="bold" fontSize={24} color="white">XRPL | XRP Ledger</Heading>
            <Heading fontWeight="bold" fontSize={64} color="white" textAlign="center">Community <br />Powered <br />Utility</Heading>
            <Button rightIcon={<MdArrowForward />} bgColor="lightViolet" color="white" p={8} w="150px" borderRadius="lg">
              Start Building
            </Button>
          </VStack>
        </Flex>
      </Flex>
      <Flex pos="relative">
          <Flex flex="4" align="center">
            <VStack align="start" ml={500}>
              <Heading fontWeight="bold" fontSize={32} color="white" mb={16}>The XRP Ledger: A <br />Scalable, Sustainable <br />Blockchain</Heading>
              <Heading fontSize={24} color="white" w="500px">The XRP Ledger (XRPL) is a <br/>decentralized, public <br />blockchain led by a global <br />developer community.</Heading>
              <Heading fontSize={24} color="white" w="500px">It’s fast, energy efficient, and reliable. With <br />ease of development, low transaction costs, <br />and a knowledgeable community, it provides <br />developers with a strong open-source <br />foundation for executing on the most <br />demanding projects—without hurting the <br />environment.</Heading>
            </VStack>
          </Flex>
          <Flex flex="1" align="left">
            <Img src={rightImg} h="750px"></Img>
          </Flex>
      </Flex>
  </Box>
)