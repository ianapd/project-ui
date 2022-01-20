import { VStack, Container, Heading, Box, useColorModeValue, Spacer, Grid, GridItem, Img, Flex, Text } from "@chakra-ui/react";

export const FeatureCardsSection = ({ title, subTitle }) => (
  <Box>
    <Box
      bg={useColorModeValue('rgba(255,255,255,0.7)', 'rgba(17,17,18,255.7)')}
      borderColor="transparent"
      h={["275vh", "275vh", "130vh", "130vh"]}
    >
      <Container maxW='container.xl' mx={16} display={['none', 'none', 'grid', 'grid']}>
          <Heading fontWeight="bold" fontSize={16} color="white" mb={8}>{title}</Heading>
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
                      <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Decentralized <br/>Exchange</Heading>
                      <Text fontSize={16} color="white" px={8}>A high performance decentralized peer-to-peer multi-currency exchange built directly into the blockchain</Text>
                    </VStack>
                  </Flex>
                  <Flex flex="1">
                    <Img src="https://xrpl.org/assets/img/cards/3col-pink-purple.svg" w="100%" /> 
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} mr={16}>
              <Box bgColor="#232325" borderRadius="16px" w="25vw" h="45vh">
                <Flex pos="relative" direction="column" h="45vh">
                  <Flex flex="8">
                    <VStack align="start">
                    <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Cross-Currency Payments</Heading>
                    <Text fontSize={16} color="white" px={8}>Atomically settle multi-hop payments that cross currency or national boundaries with ease</Text>
                    </VStack>
                  </Flex>
                  <Flex flex="1">
                    <Img src="https://xrpl.org/assets/img/cards/3col-neutral-blue.svg" w="100%" /> 
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} mr={16}>
              <Box bgColor="#232325" borderRadius="16px" w="25vw" h="45vh">
                <Flex pos="relative" direction="column" h="45vh">
                  <Flex flex="8">
                    <VStack align="start">
                      <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Payment <br/>Channels</Heading>
                      <Text fontSize={16} color="white" px={8}>Batched micropayments with unlimited speed, secured with XRP</Text>
                    </VStack>
                  </Flex>
                  <Flex flex="1">
                    <Img src="https://xrpl.org/assets/img/cards/3col-light-green.svg" w="100%" /> 
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} mr={16} mt={16}>
              <Box bgColor="#232325" borderRadius="16px" w="25vw" h="45vh">
                <Flex pos="relative" direction="column" h="45vh">
                  <Flex flex="8">
                    <VStack align="start">
                      <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Multi-Signing</Heading>
                      <Text fontSize={16} color="white" px={8}>Flexible options for custody and security of on-ledger accounts</Text>
                    </VStack>
                  </Flex>
                  <Flex flex="1">
                      <Img src="https://xrpl.org/assets/img/cards/3col-orange.svg" w="100%" /> 
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} mr={16} mt={16}>
              <Box bgColor="#232325" borderRadius="16px" w="25vw" h="45vh">
                <Flex pos="relative" direction="column" h="45vh">
                  <Flex flex="8">
                    <VStack align="start">
                      <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Issued Currencies</Heading>
                      <Text fontSize={16} color="white" px={8}>All currencies other than XRP can be represented in the XRP Ledger as issued currencies, sometimes called “IOUs”</Text>
                    </VStack>
                  </Flex>
                  <Flex flex="1">
                    <Img src="https://xrpl.org/assets/img/cards/3col-purple-blue-2.svg" w="100%" /> 
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
                    <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Decentralized <br/>Exchange</Heading>
                    <Text fontSize={16} color="white" px={8}>A high performance decentralized peer-to-peer multi-currency exchange built directly into the blockchain</Text>
                  </VStack>
                </Flex>
                <Flex flex="1">
                  <Img src="https://xrpl.org/assets/img/cards/3col-pink-purple.svg" w="100%" /> 
                </Flex>
              </Flex>
            </Box>
            <Box bgColor="#232325" borderRadius="16px" w="80vw" h="45vh">
              <Flex pos="relative" direction="column" h="45vh">
                <Flex flex="8">
                  <VStack align="start">
                    <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Cross-Currency Payments</Heading>
                    <Text fontSize={16} color="white" px={8}>Atomically settle multi-hop payments that cross currency or national boundaries with ease</Text>
                  </VStack>
                </Flex>
                <Flex flex="1">
                  <Img src="https://xrpl.org/assets/img/cards/3col-neutral-blue.svg" w="100%" /> 
                </Flex>
              </Flex>
            </Box>
            <Box bgColor="#232325" borderRadius="16px" w="80vw" h="45vh">
              <Flex pos="relative" direction="column" h="45vh">
                <Flex flex="8">
                  <VStack align="start">
                    <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Payment <br/>Channels</Heading>
                    <Text fontSize={16} color="white" px={8}>Batched micropayments with unlimited speed, secured with XRP</Text>
                  </VStack>
                </Flex>
                <Flex flex="1">
                  <Img src="https://xrpl.org/assets/img/cards/3col-light-green.svg" w="100%" /> 
                </Flex>
              </Flex>
            </Box>
            <Box bgColor="#232325" borderRadius="16px" w="80vw" h="45vh">
              <Flex pos="relative" direction="column" h="45vh">
                <Flex flex="8">
                  <VStack align="start">
                    <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Multi-Signing</Heading>
                    <Text fontSize={16} color="white" px={8}>Flexible options for custody and security of on-ledger accounts</Text>
                  </VStack>
                </Flex>
                <Flex flex="1">
                    <Img src="https://xrpl.org/assets/img/cards/3col-orange.svg" w="100%" /> 
                </Flex>
              </Flex>
            </Box>
            <Box bgColor="#232325" borderRadius="16px" w="80vw" h="45vh">
              <Flex pos="relative" direction="column" h="45vh">
                <Flex flex="8">
                  <VStack align="start">
                    <Heading fontWeight="bold" fontSize={18} color="white" p={8}>Issued Currencies</Heading>
                    <Text fontSize={16} color="white" px={8}>All currencies other than XRP can be represented in the XRP Ledger as issued currencies, sometimes called “IOUs”</Text>
                  </VStack>
                </Flex>
                <Flex flex="1">
                  <Img src="https://xrpl.org/assets/img/cards/3col-purple-blue-2.svg" w="100%" /> 
                </Flex>
              </Flex>
            </Box>
          </VStack>
      </Container>
    </Box>  
  </Box>
) 