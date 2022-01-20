import { VStack, Container, Heading, Box, useColorModeValue, Button, Spacer, Grid, GridItem, Img, Center, Flex} from "@chakra-ui/react";
import { MdArrowForward } from 'react-icons/md'

export const VisionSection = ({ title, subTitle }) => (
  <Box>
    <Box
      bg={useColorModeValue('rgba(255,255,255,0.7)', 'rgba(17,17,18,255.7)')}
      borderColor="transparent"
      h={["90vh", "90vh", "70vh", "70vh"]}
    >
      <Center>
        <Box bgColor="#232325" borderRadius="16px" w="600px" h="300px">
          <Flex position="relative" direction="row" h="300px">
            <Flex flex="1" align="self-start">
              <Img src="https://xrpl.org/img/backgrounds/cta-home-purple.svg" w="100%" /> 
            </Flex>
            <Flex flex="4">
              <VStack>
                <Heading textAlign="center" fontWeight="bold" fontSize={32} color="white" p={4}>{title}</Heading>
                <Heading fontSize={16} textAlign="center" color="white" px={4} pb={4}>{subTitle}</Heading>
                <Button rightIcon={<MdArrowForward />} fontSize={14} bgColor="lightViolet" color="white" p={4} w="150px" borderRadius="lg">
                  Learn More
                </Button>
              </VStack>
            </Flex>
            <Flex flex="1" align="self-end">
              <Img src="https://xrpl.org/img/backgrounds/cta-home-green.svg" w="100%" /> 
            </Flex>
          </Flex>
        </Box>
      </Center>
    </Box>
  </Box>    
)