import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Link,
  extendTheme,
  CSSReset,
  Text,
  Collapse,
  styled
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavbarMain = () => {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          fontFamily: "body",
        },
      },
    },
  });

  const [isOpenMenu, setisOpenMenu] = useState(false);

  const handleToggle = () => {
    setisOpenMenu(!isOpenMenu);
  };


  return (
    <ChakraProvider theme={theme}>
      <Flex
        as="nav"
        align="center"
        justify="space-around"
        wrap="wrap"
        padding="1.5rem"
        bg="blue.400"
        color="white"
      >
        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          {isOpenMenu ? <CloseIcon /> : <HamburgerIcon boxSize={7}/>}
        </Box>

        <Flex
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          justifyContent="space-around"
        >
          <Link href="#" p={2}>
            Home
          </Link>
          <Link href="#" p={1}>
            All Trainings
          </Link>
          <Link href="#" p={2}>
            About Us
          </Link>
          <Link href="#" p={2}>
            Our Team
          </Link>
          <Link href="#" p={2}>
            Contact Us
          </Link>
        </Flex>

        {/* ....... */}

        <Collapse in={isOpenMenu} animateOpacity>
          <Flex
            display={{  md: "none" }}
            flexDirection="column"
            // width="70%"
            // height="80%"
            alignItems="center"
            mt={2}
          >
            <Link href="#" p={2}>
              Home
            </Link>
            <Link href="#" p={1}>
              All Trainings
            </Link>
            <Link href="#" p={2}>
              About Us
            </Link>
            <Link href="#" p={2}>
              Our Team
            </Link>
            <Link href="#" p={2}>
              Contact Us
            </Link>
          </Flex>
        </Collapse>

      </Flex>
    </ChakraProvider>
  );
}


export default NavbarMain;








