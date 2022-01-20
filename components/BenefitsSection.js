import { VStack, Container, Heading, Text, Box, useColorModeValue, Spacer, Grid, GridItem, Img } from "@chakra-ui/react";

export const BenefitsSection = ({ title, subTitle }) => (
  <Box>
    <Box
      bg={useColorModeValue('rgba(255,255,255,0.7)', 'rgba(17,17,18,255.7)')}
      borderColor="transparent"
      h={["160vh", "160vh", "90vh", "90vh"]}
    >
      <Container maxW='container.xl' mx={16} display={['none', 'none', 'grid', 'grid']}>
          <Heading fontWeight="bold" fontSize={16} color="white" mb={4}>{title}</Heading>
          <Heading fontWeight="bold" fontSize={28} color="white">{subTitle}</Heading>
          <Grid 
            h='50vh'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(3, 1fr)'
            mt={16}
            gap={6}
          >
            <GridItem rowSpan={1} colSpan={1} mr={16}>
              <Box>
                <VStack align="start">
                  <Img src="https://xrpl.org/assets/img/icons/public.svg" h="50px"></Img>
                  <Heading fontWeight="bold" fontSize={18} color="white">Public and Decentralized Structure</Heading>
                  <Text fontSize={16} color="white">Open source, open to anyone to build on, maintained by the community</Text>
                </VStack>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} mr={16}>
              <Box>
                <VStack align="start">
                  <Img src="https://xrpl.org/assets/img/icons/streamlined.svg" h="50px"></Img>
                  <Heading fontWeight="bold" fontSize={18} color="white">Streamlined Development</Heading>
                  <Text fontSize={16} color="white">Tools and documentation that speed development and reduce time to market</Text>
                </VStack>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Box>
                <VStack align="start">
                  <Img src="https://xrpl.org/assets/img/icons/performance.svg" h="50px"></Img>
                  <Heading fontWeight="bold" fontSize={18} color="white">High Performance</Heading>
                  <Text fontSize={16} color="white">Capable of settling thousands of transactions in seconds</Text>
                </VStack>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} mr={16} mt={16}>
              <Box>
                <VStack align="start">
                  <Img src="https://xrpl.org/assets/img/icons/low-cost.svg" h="50px"></Img>
                  <Heading fontWeight="bold" fontSize={18} color="white">Low Cost</Heading>
                  <Text fontSize={16} color="white">At fractions of a penny per transaction, costs are inexpensive enough to enable a wide variety of use cases</Text>
                </VStack>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} mr={16} mt={16}>
              <Box>
                <VStack align="start">
                  <Img src="https://xrpl.org/assets/img/icons/community.svg" h="50px"></Img>
                  <Heading fontWeight="bold" fontSize={18} color="white">Vibrant Community</Heading>
                  <Text fontSize={16} color="white">Developers, validators, users, and businesses make the XRP Ledger better every day</Text>
                </VStack>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} mt={16}>
              <Box>
                <VStack align="start">
                  <Img src="https://xrpl.org/assets/img/icons/reliability.svg" h="50px"></Img>
                  <Heading fontWeight="bold" fontSize={18} color="white">Proven Reliability</Heading>
                  <Text fontSize={16} color="white">8+ years of consistent performance over more than 63 million ledgers</Text>
                </VStack>
              </Box>
            </GridItem>
          </Grid>
      </Container>
      <Container maxW='container.sm' mx={8} display={['flex', 'flex', 'none', 'none']}>
          <VStack align="start">
            <Heading fontWeight="bold" fontSize={16} color="white" mb={4}>{title}</Heading>
            <Heading fontWeight="bold" fontSize={28} color="white">{subTitle}</Heading>
            <Box>
              <VStack align="start" mt={8} mb={8}>
                <Img src="https://xrpl.org/assets/img/icons/public.svg" h="50px"></Img>
                <Heading fontWeight="bold" fontSize={18} color="white">Public and Decentralized Structure</Heading>
                <Text fontSize={16} color="white">Open source, open to anyone to build on, maintained by the community</Text>
              </VStack>
            </Box>
            <Box>
              <VStack align="start" mb={8}>
                <Img src="https://xrpl.org/assets/img/icons/streamlined.svg" h="50px"></Img>
                <Heading fontWeight="bold" fontSize={18} color="white">Streamlined Development</Heading>
                <Text fontSize={16} color="white">Tools and documentation that speed development and reduce time to market</Text>
              </VStack>
            </Box>
            <Box>
              <VStack align="start" mb={8}>
                <Img src="https://xrpl.org/assets/img/icons/performance.svg" h="50px"></Img>
                <Heading fontWeight="bold" fontSize={18} color="white">High Performance</Heading>
                <Text fontSize={16} color="white">Capable of settling thousands of transactions in seconds</Text>
              </VStack>
            </Box>
            <Box>
              <VStack align="start" mb={8}>
                <Img src="https://xrpl.org/assets/img/icons/low-cost.svg" h="50px"></Img>
                <Heading fontWeight="bold" fontSize={18} color="white">Low Cost</Heading>
                <Text fontSize={16} color="white">At fractions of a penny per transaction, costs are inexpensive enough to enable a wide variety of use cases</Text>
              </VStack>
            </Box>
            <Box>
              <VStack align="start" mb={8}>
                <Img src="https://xrpl.org/assets/img/icons/community.svg" h="50px"></Img>
                <Heading fontWeight="bold" fontSize={18} color="white">Vibrant Community</Heading>
                <Text fontSize={16} color="white">Developers, validators, users, and businesses make the XRP Ledger better every day</Text>
              </VStack>
            </Box>
            <Box>
              <VStack align="start" mb={8}>
                <Img src="https://xrpl.org/assets/img/icons/reliability.svg" h="50px"></Img>
                <Heading fontWeight="bold" fontSize={18} color="white">Proven Reliability</Heading>
                <Text fontSize={16} color="white">8+ years of consistent performance over more than 63 million ledgers</Text>
              </VStack>
            </Box>
          </VStack>
      </Container>
    </Box>  
  </Box>
)