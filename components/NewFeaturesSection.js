import { VStack, Container, Heading, Box, useColorModeValue, Spacer, Grid, GridItem, Img, Text } from "@chakra-ui/react";

export const NewFeaturesSection = ({ title, subTitle }) => (
  <Box>
    <Box
      bg={useColorModeValue('rgba(255,255,255,0.7)', 'rgba(17,17,18,255.7)')}
      borderColor="transparent"
      h={["120vh", "120vh", "70vh", "70vh"]}
    >
      <Container maxW='container.xl' mx={16} display={['none', 'none', 'grid', 'grid']}>
          <Heading fontWeight="bold" fontSize={16} color="white">{title}</Heading>
          <Heading fontWeight="bold" fontSize={28} color="white">{subTitle}</Heading>
          <Grid 
            h='50vh'
            templateColumns='repeat(3, 1fr)'
            mt={16}
            gap={6}
          >
            <GridItem colSpan={1} mr={16}>
              <Box>
                <VStack align="start">
                  <Box as="button" bgColor="#145D35" borderRadius="16px" color="green" p={2} fontSize={16}>In Development</Box>
                  <Heading fontWeight="bold" fontSize={18} color="white">Smart Contracts</Heading>
                  <Text fontSize={16} color="white">Hooks are small, efficient WebAssembly modules designed specifically for the XRPL. Check out the hooks amendment and public testnet that enable smart contract functionality.</Text>
                </VStack>
              </Box>
            </GridItem>
            <GridItem colSpan={1} mr={16}>
              <Box>
                <VStack align="start">
                  <Box as="button" bgColor="#145D35" borderRadius="16px" color="green" p={2} fontSize={16}>In Development</Box>
                  <Heading fontWeight="bold" fontSize={18} color="white">Non-Fungible Tokens</Heading>
                  <Text fontSize={16} color="white">Lower fees, faster transactions, and custom token functionality make the XRPL ideally suited for building an ecosystem for NFTs. Explore proposed standards for issuing NFTs.</Text>
                </VStack>
              </Box>
            </GridItem>
            <GridItem colSpan={1} mr={16}>
              <Box>
                <VStack align="start">
                  <Box as="button" bgColor="#145D35" borderRadius="16px" color="green" p={2} fontSize={16}>In Development</Box>
                  <Heading fontWeight="bold" fontSize={18} color="white">Sidechains</Heading>
                  <Text fontSize={16} color="white">Extend, experiment, and specialize a custom sidechain based on the XRPL's proven blockchain technology. Learn more about the vision of sidechains.</Text>
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
                  <Box as="button" bgColor="#145D35" borderRadius="16px" color="green" p={2} fontSize={16}>In Development</Box>
                  <Heading fontWeight="bold" fontSize={18} color="white">Smart Contracts</Heading>
                  <Text fontSize={16} color="white">Hooks are small, efficient WebAssembly modules designed specifically for the XRPL. Check out the hooks amendment and public testnet that enable smart contract functionality.</Text>
              </VStack>
            </Box>
            <Box>
              <VStack align="start" mb={8}>
                  <Box as="button" bgColor="#145D35" borderRadius="16px" color="green" p={2} fontSize={16}>In Development</Box>
                  <Heading fontWeight="bold" fontSize={18} color="white">Non-Fungible Tokens</Heading>
                  <Text fontSize={16} color="white">Lower fees, faster transactions, and custom token functionality make the XRPL ideally suited for building an ecosystem for NFTs. Explore proposed standards for issuing NFTs.</Text>
              </VStack>
            </Box>
            <Box>
              <VStack align="start" mb={8}>
                  <Box as="button" bgColor="#145D35" borderRadius="16px" color="green" p={2} fontSize={16}>In Development</Box>
                  <Heading fontWeight="bold" fontSize={18} color="white">Sidechains</Heading>
                  <Text fontSize={16} color="white">Extend, experiment, and specialize a custom sidechain based on the XRPL's proven blockchain technology. Learn more about the vision of sidechains.</Text>
              </VStack>
            </Box>
          </VStack>
      </Container>
    </Box>  
  </Box>
)