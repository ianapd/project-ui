import {
  Box, HStack, Img, Heading, useColorModeValue, Container, Button, Spacer, Flex, VStack, Grid, GridItem, IconButton, Text
} from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

export const Footer = ({ logo }) => (
  <Box
    bg={useColorModeValue('rgba(255,255,255,0.7)', 'rgba(17,17,18,255.7)')}
    borderColor="transparent"
    borderTopWidth={4}
    py={4} 
  >
    <Grid 
      h='600px'
      templateColumns='repeat(3, 1fr)'
      mt={16}
      ml={16}
      gap={6}
    >
      <GridItem colSpan={1} mr={16}>
        <Box>
          <VStack align="start">
            <Heading fontSize={18} color="lightGrey" pb={4}>About</Heading>
            <Box as="button" fontSize={18} color="white" pb={4}>XRPL Overview</Box>
            <Box as="button" fontSize={18} color="white" pb={4}>Use Cases & Featured Projects</Box>
            <Box as="button" fontSize={18} color="white" pb={4}>History</Box>
            <Box as="button" fontSize={18} color="white" pb={4}>
              <HStack>
                <Text>Ledger Explorer</Text>
                <IconButton 
                  icon={<FiArrowUpRight size="24px" color="darkViolet" />}
                  variant="ghost"
                />
              </HStack>
            </Box>
            <Box as="button" fontSize={18} color="white" pb={4}>XRP Overview</Box>
            <Box as="button" fontSize={18} color="white" pb={4}>Impact</Box>
            <Box as="button" fontSize={18} color="white" pb={4}>Carbon Calculator</Box>
            <Box as="button" fontSize={18} color="white" pb={4}>XRPL Foundation</Box>
            <Box as="button" fontSize={18} color="white" pb={4}>FAQ</Box>
          </VStack>
        </Box>
      </GridItem>
      <GridItem colSpan={1} mr={16}>
        <Box>
          <VStack align="start">
            <Heading fontSize={18} color="lightGrey" pb={4}>Docs</Heading>
            <Box as="button" fontSize={18} color="white" pb={4}>Documentation</Box>
            <Box as="button" fontSize={18} color="white" pb={4}>Concepts</Box>
            <Box as="button" fontSize={18} color="white" pb={4}>Tutorials</Box>
            <Box as="button" fontSize={18} color="white" pb={4}>References</Box>
            <Box as="button" fontSize={18} color="white" pb={4}>Browse By Label</Box>
            <Box as="button" fontSize={18} color="white" pb={4}>Dev Tools</Box>
          </VStack>
        </Box>
      </GridItem>
      <GridItem colSpan={1} mr={16}>
        <Box>
          <VStack align="start">
            <Heading fontSize={18} color="lightGrey" pb={4}>Community</Heading>
            <Box as="button" fontSize={18} color="white" pb={4}>Contribute</Box>
            <Box as="button" fontSize={18} color="white" pb={4}>Contribute Codeto the XRP Ledger</Box>
            <Box as="button" fontSize={18} color="white" pb={4}>
              <HStack>
                <Text>Dev Blog</Text>
                <IconButton 
                  color="white"
                  icon={<FiArrowUpRight size="24px" color="darkViolet" />}
                  variant="ghost"
                />
              </HStack>
            </Box>
            <Box as="button" fontSize={18} color="white" pb={4}>
              <HStack>
                <Text>XRPL Grants</Text>
                <IconButton 
                  color="white"
                  icon={<FiArrowUpRight size="24px" color="darkViolet" />}
                  variant="ghost"
                />
              </HStack>
            </Box>
            <Box as="button" fontSize={18} color="white" pb={4}>
              <HStack>
                <Text>Github</Text>
                <IconButton 
                  color="white"
                  icon={<FiArrowUpRight size="24px" color="darkViolet" />}
                  variant="ghost"
                />
              </HStack>
            </Box>
            <Box as="button" fontSize={18} color="white" pb={4}>Report a Scam</Box>
          </VStack>
        </Box>
      </GridItem>
    </Grid>
  </Box>
)