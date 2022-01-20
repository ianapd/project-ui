import { VStack, Container, Heading, Box, useColorModeValue, Spacer, Grid, GridItem, Img, Flex , Text} from "@chakra-ui/react";

export const PathCardsSection = ({ title, subTitle }) => (
  <Box>
    <Box
      bg={useColorModeValue('rgba(255,255,255,0.7)', 'rgba(17,17,18,255.7)')}
      borderColor="transparent"
      h={["275vh", "275vh", "150vh", "150vh"]}
    >
      <Container maxW='container.xl' mx={16} display={['none', 'none', 'grid', 'grid']}>
          <Heading fontWeight="bold" fontSize={16} color="white">{title}</Heading>
          <Heading fontWeight="bold" fontSize={28} color="white">{subTitle}</Heading>
          <Grid 
            h='50vh'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(3, 1fr)'
            mt={16}
            gap={6}
          >
            <GridItem rowSpan={1} colSpan={1} mr={16}>
              <Box bgColor="#232325" borderRadius="16px" w="25vw" h="45vh">
                <Flex pos="relative" direction="column" h="45vh">
                  <Flex flex="8">
                    <VStack align="start">
                      <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Quickstart</Heading>
                      <Text fontSize={16} color="white" px={8}>Access everything you need to get started working with the XRPL</Text>
                    </VStack>
                  </Flex>
                  <Flex flex="1">
                    <Img src="https://xrpl.org/assets/img/cards/3col-orange-yellow.svg" w="100%" /> 
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} mr={16}>
              <Box bgColor="#232325" borderRadius="16px" w="25vw" h="45vh">
                <Flex pos="relative" direction="column" h="45vh">
                  <Flex flex="8">
                    <VStack align="start">
                      <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Guided Tutorials</Heading>
                      <Text fontSize={16} color="white" px={8}>Follow step-by-step guides for frequent tasks</Text>
                    </VStack>
                  </Flex>
                  <Flex flex="1">
                    <Img src="https://xrpl.org/assets/img/cards/3col-magenta-orange.svg" w="100%" /> 
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} mr={16}>
              <Box bgColor="#232325" borderRadius="16px" w="25vw" h="45vh">
                <Flex pos="relative" direction="column" h="45vh">
                  <Flex flex="8">
                    <VStack align="start">
                      <Heading fontWeight="bold" fontSize={18} color="white" p={8}>XRPL Fundamentals</Heading>
                      <Text fontSize={16} color="white" px={8}>Read about the XRPL’s foundational concepts</Text>
                    </VStack>
                  </Flex>
                  <Flex flex="1">
                    <Img src="https://xrpl.org/assets/img/cards/3col-purple-blue-green.svg" w="100%" /> 
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} mr={16} mt={16}>
              <Box bgColor="#232325" borderRadius="16px" w="25vw" h="45vh">
                <Flex pos="relative" direction="column" h="45vh">
                  <Flex flex="8">
                    <VStack align="start">
                      <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Choose a Language</Heading>
                      <Text fontSize={16} color="white" px={8}>Find tools, documentation and sample code in Python, Java, JavaScript, or use HTTP APISs</Text>
                    </VStack>
                  </Flex>
                  <Flex flex="1">
                    <Img src="https://xrpl.org/assets/img/cards/3col-light-blue.svg" w="100%" /> 
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} mr={16} mt={16}>
              <Box bgColor="#232325" borderRadius="16px" w="25vw" h="45vh">
                <Flex pos="relative" direction="column" h="45vh">
                  <Flex flex="8">
                    <VStack align="start">
                      <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Get Inspired</Heading>
                      <Text fontSize={16} color="white" px={8}>See what your peers have built on the XRPL</Text>
                    </VStack>
                  </Flex>
                  <Flex flex="1">
                    <Img src="https://xrpl.org/assets/img/cards/3col-green-blue.svg" w="100%" /> 
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
          </Grid>  
      </Container>
      <Container maxW='container.sm' mx={8} display={['flex', 'flex', 'none', 'none']}>
          <VStack align="start">
            <Heading fontWeight="bold" fontSize={16} color="white" mb={4}>{title}</Heading>
            <Heading fontWeight="bold" fontSize={28} color="white">{subTitle}</Heading>
            <Box bgColor="#232325" borderRadius="16px" w="80vw" h="45vh">
              <Flex pos="relative" direction="column" h="45vh">
                <Flex flex="8">
                  <VStack align="start">
                      <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Quickstart</Heading>
                      <Text fontSize={16} color="white" px={8}>Access everything you need to get started working with the XRPL</Text>
                  </VStack>
                </Flex>
                <Flex flex="1">
                  <Img src="https://xrpl.org/assets/img/cards/3col-orange-yellow.svg" w="100%" /> 
                </Flex>
              </Flex>
            </Box>
            <Box bgColor="#232325" borderRadius="16px" w="80vw" h="45vh">
              <Flex pos="relative" direction="column" h="45vh">
                <Flex flex="8">
                  <VStack align="start">
                      <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Guided Tutorials</Heading>
                      <Text fontSize={16} color="white" px={8}>Follow step-by-step guides for frequent tasks</Text>
                  </VStack>
                </Flex>
                <Flex flex="1">
                  <Img src="https://xrpl.org/assets/img/cards/3col-magenta-orange.svg" w="100%" /> 
                </Flex>
              </Flex>
            </Box>
            <Box bgColor="#232325" borderRadius="16px" w="80vw" h="45vh">
              <Flex pos="relative" direction="column" h="45vh">
                <Flex flex="8">
                  <VStack align="start">
                      <Heading fontWeight="bold" fontSize={18} color="white" p={8}>XRPL Fundamentals</Heading>
                      <Text fontSize={16} color="white" px={8}>Read about the XRPL’s foundational concepts</Text>
                  </VStack>    
                </Flex>
                <Flex flex="1">
                  <Img src="https://xrpl.org/assets/img/cards/3col-purple-blue-green.svg" w="100%" /> 
                </Flex>
              </Flex>
            </Box>
            <Box bgColor="#232325" borderRadius="16px" w="80vw" h="45vh">
              <Flex pos="relative" direction="column" h="45vh">
                <Flex flex="8">
                  <VStack align="start">
                      <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Choose a Language</Heading>
                      <Text fontSize={16} color="white" px={8}>Find tools, documentation and sample code in Python, Java, JavaScript, or use HTTP APISs</Text>
                  </VStack>
                </Flex>
                <Flex flex="1">
                    <Img src="https://xrpl.org/assets/img/cards/3col-light-blue.svg" w="100%" /> 
                </Flex>
              </Flex>
            </Box>
            <Box bgColor="#232325" borderRadius="16px" w="80vw" h="45vh">
              <Flex pos="relative" direction="column" h="45vh">
                <Flex flex="8">
                  <VStack align="start">
                      <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Get Inspired</Heading>
                      <Text fontSize={16} color="white" px={8}>See what your peers have built on the XRPL</Text>
                  </VStack>
                </Flex>
                <Flex flex="1">
                  <Img src="https://xrpl.org/assets/img/cards/3col-green-blue.svg" w="100%" /> 
                </Flex>
              </Flex>
            </Box>
          </VStack>
      </Container>
    </Box>  
  </Box>
) 