import { VStack, Container, Heading, Box, useColorModeValue, Button, Spacer, Grid, GridItem, Img, Center, Flex } from "@chakra-ui/react";
import { MdArrowForward } from 'react-icons/md'

export const CommunitySection = ({ title, subTitle, description }) => (
  <Box>
    <Box
      bg={useColorModeValue('rgba(255,255,255,0.7)', 'rgba(17,17,18,255.7)')}
      borderColor="transparent"
    >
      <Center>
        <Box bgColor="#232325" borderRadius="16px" w="600px" h="350px">
        <Flex position="relative" direction="row" h="350px">
            <Flex flex="1" />
            <Flex flex="4">
              <VStack>
              <Heading fontWeight="bold" fontSize={24} color="white" p={4}>{title}</Heading>
              <Heading fontWeight="bold" textAlign="center" fontSize={24} color="white" px={4} pb={4}>{description}</Heading>
              <Heading fontSize={18} textAlign="center" color="white" px={4} pb={4}>{subTitle}</Heading>
              <Button rightIcon={<MdArrowForward />} bgColor="lightViolet" color="white" p={4} w="150px" borderRadius="lg">
                Learn More
              </Button>
              </VStack>
            </Flex>
            <Flex flex="1" align="self-end">
              <Img src="https://xrpl.org/img/backgrounds/cta-home-magenta.svg" w="100%" /> 
            </Flex>
          </Flex>
        </Box>
      </Center>
    </Box>
  </Box>    
)