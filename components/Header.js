import {
  Box, HStack, Img, Heading, useColorModeValue, Button, Grid, Flex, GridItem, Popover, PopoverTrigger, PopoverContent, IconButton, Text
} from '@chakra-ui/react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

// export const AboutPopOver = ({ }) => (
//   <Box 
//     bg={useColorModeValue('rgba(255,255,255,0.7)', 'rgba(17,17,18,255.7)')}
//     borderColor="transparent"
//     borderTopWidth={4}
//     py={4} 
//     w="500px"
//     h="100px"
//   >
//     <Grid 
//       w="500px"
//       h='100px'
//       templateRows='repeat(2, 1fr)'
//       templateColumns='repeat(3, 1fr)'
//       mt={16}
//       gap={6}
//     >
//       <GridItem rowSpan={2} colSpan={1}>
//         <Heading fontSize={14} color="lightGrey" pb={4}>XRP Ledger</Heading>
//         <Box as="button" fontSize={18} color="white" pb={4}>XRPL Overview</Box>
//         <Box as="button" fontSize={18} color="white" pb={4}>Use Cases & Featured Projects</Box>
//         <Box as="button" fontSize={18} color="white" pb={4}>History</Box>
//         <Box as="button" fontSize={18} color="white" pb={4}>
//           <HStack>
//             <Text>Ledger Explorer</Text>
//             <IconButton 
//               icon={<FiArrowUpRight size="24px" color="darkViolet" />}
//               variant="ghost"
//             />
//           </HStack>
//         </Box>
//       </GridItem>
//       <GridItem rowSpan={1} colSpan={1}>
//         <Heading fontSize={14} color="lightGrey" pb={4}>XRP</Heading>
//         <Box as="button" fontSize={18} color="white" pb={4}>XRP Overview</Box>
//       </GridItem>
//       <GridItem rowSpan={1} colSpan={1}>
//         <Heading fontSize={14} color="lightGrey" pb={4}>Sustainability</Heading>
//         <Box as="button" fontSize={18} color="white" pb={4}>Impact</Box>
//         <Box as="button" fontSize={18} color="white" pb={4}>Carbon Calculator</Box>
//       </GridItem>
//       <GridItem rowSpan={2} colSpan={1}>
//           <Heading fontSize={18} color="lightGrey" pb={4}>About</Heading>
//           <Box as="button" fontSize={18} color="white" pb={4}>XRPL Overview</Box>
//           <Box as="button" fontSize={18} color="white" pb={4}>FAQ</Box>
//       </GridItem>
//     </Grid>
//   </Box>
// )

export const Header = ({ children, mode='light' }) => (
  <Box>
    <Box 
      bg={useColorModeValue('rgba(255,255,255,0.7)', 'rgba(17,17,18,255.7)')}
      borderColor="transparent"
      borderTopWidth={4}
      py={4} 
    >
      <Flex>
        {children}
      </Flex>
    </Box>
  </Box>
)

export const AppLinks = ({ logo, title, routes }) => (
  <Box w="15vw" h="5vh" ml={4}>
    <Link href="/">
      <Box as="a" cursor="pointer">
        <HStack>
          <Img src={logo} w="15vw" h="5vh"/>
        </HStack>
      </Box>
    </Link>
  </Box>
)