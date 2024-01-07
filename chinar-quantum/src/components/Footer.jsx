import React from 'react'
import {Box, Image, Flex, Stack,  Text} from '@chakra-ui/react'
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaEarthAsia } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useBreakpointValue } from '@chakra-ui/react';
 

const Footer = () => {
    const stackWidth = useBreakpointValue({ base: '97%', md: '20%' });
  return (
    <Box
    backgroundImage="https://images.unsplash.com/photo-1703855435446-63315536d01e?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    backgroundSize="cover"
    backgroundPosition="center"
    height="500px" 
    width="100%" 
    mt="7%"
    mb="2%"
    filter="brightness(0.9)"
  >
   <Flex
     alignItems="center"
     m="5%"
   >
    <Image
        src="https://chinarquantumai.org/images/ai.png"
        alt="logo"
        m="auto"
        mt="9"
        // boxSize="20%"
        width={{ base: "50%", md: "30%", lg: "20%" }}
    />
   </Flex>


   
   <Flex
      width="100%"
      justifyContent="space-around"
      p={4}
      direction={{ base: 'column', md: 'row' }}

    >
        <Stack
         width={stackWidth} 
         textAlign="center"
         >
          <Flex> <Text fontSize="xl" fontWeight="700" color="green.500">Contact Details </Text></Flex>
          <Flex> <FaPhone color="green" style={{ marginTop: '6px' }} /> <Text color="white"> +91 9906619248 / +4915259640305</Text></Flex>     
          <Flex> <MdOutlineMail color="green"style={{ marginTop: '6px', marginRight: '3px' }}  /> <Text color="white">info@chinarquantumai.org</Text> </Flex> 
          <Flex> <FaEarthAsia  color="green"style={{ marginTop: '6px', marginRight: '3px' }}/>  <Text color="white">Greater kashmir</Text></Flex> 
        </Stack>

        <Stack width={stackWidth}  textAlign="center">
         <Flex><Text fontSize="xl" fontWeight="700" color="green.500">Quick Links</Text></Flex> 
          <Flex> <MdKeyboardDoubleArrowRight color="white" style={{ marginTop: '6px' }}/>  <Text color="white"> All Trainings</Text></Flex>     
          <Flex> <MdKeyboardDoubleArrowRight color="white" style={{ marginTop: '6px' }}/>  <Text color="white"> All Events</Text></Flex>     
          <Flex> <MdKeyboardDoubleArrowRight color="white" style={{ marginTop: '6px' }}/>  <Text color="white"> Our Products</Text></Flex>     
          <Flex> <MdKeyboardDoubleArrowRight color="white" style={{ marginTop: '6px' }}/>  <Text color="white"> Our Trainers</Text></Flex>     
        </Stack>

        
        <Stack width={stackWidth}  textAlign="center">
        <Flex> <Text fontSize="xl" fontWeight="700" color="green.500">Useful Links</Text></Flex>
          <Flex> <MdKeyboardDoubleArrowRight color="white" style={{ marginTop: '6px' }}/>  <Text color="white"> About Us</Text></Flex>     
          <Flex> <MdKeyboardDoubleArrowRight color="white" style={{ marginTop: '6px' }}/>  <Text color="white"> Contact Us</Text></Flex>     
          <Flex> <MdKeyboardDoubleArrowRight color="white" style={{ marginTop: '6px' }}/>  <Text color="white"> Register Now</Text></Flex>     
          <Flex> <MdKeyboardDoubleArrowRight color="white" style={{ marginTop: '6px' }}/>  <Text color="white"> Our Trainers</Text></Flex>     
        </Stack>

    
    </Flex>
 
   
  </Box>
  )
}

export default Footer
