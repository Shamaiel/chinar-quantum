import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'

const Nav = () => {
  return (
    <Box
      width="100%"
    
      bg="blue.500"
    
    //   justifyContent="center"
    //   alignItems="center"
    >
      <Flex h="10%" width="40%" ml="13%" justifyContent="space-between" alignItems="flex-start">
        <Link color="white" href="#">
          Link 1
        </Link>
        <Link color="white" href="#">
          Link 2
        </Link>
        <Link color="white" href="#">
          Link 3
        </Link>
        <Link color="white" href="#">
          Link 4
        </Link>
        <Link color="white" href="#">
          Link 5
        </Link>
        <Link color="white" href="#">
          Link 6
        </Link>
      </Flex>
    </Box>
  )
}

export default Nav

