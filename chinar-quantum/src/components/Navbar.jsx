import React from "react";
import {
  Flex,
  Box,
  Text,
  ChakraProvider,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, TimeIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "white" : "milk";

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
    //   padding="1.5rem"
      bg={bgColor}
      color="white"
    >
      {/* Logo */}
      <Box>
        <Image
          src="https://chinarquantumai.org/images/ai.png"
          alt="Logo"
          boxSize="50px"
          width="300px"
          height="60px"
        />
      </Box>

      {/* Call Us Today */}
      <Flex align="center" justify="space-around" wrap="wrap" padding="1.5rem">
        <PhoneIcon
          borderRadius="8"
          padding="6px"
          margin="4"
          w={4}
          h={2}
          boxSize={9}
          bg="blue.500"
        />
       

        <Flex flexDirection="column" flex >
        <Text  color="grey">CALL US TODAY !</Text>
         
          <Text color="black">8932893890 / 7006822034</Text>
        </Flex>
      </Flex>


      {/* Open At */}
      <Flex   >
    
        <TimeIcon  
          padding="6px"
          margin="4"
          w={4}
          h={2}
          borderRadius="17"
          boxSize={9}
          bg="blue.500"
        
        />
      

          <Flex flexDirection="column" flex >
           <Text  color="grey">WE ARE OPEN</Text>
          <Text color="black">Mon-Fri 8:00 am - 6:00 pm </Text>
        </Flex>


      </Flex>
    
    </Flex>

    
  );
};



export default Navbar;
