import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

const OurFocus = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
      mt="4" // Add top margin
      ml={{ base: "0", md: "120" }}
      mr={{ base: "0", md: "120" }}
    >
      <Flex
          direction="column"
          align="center"
          justify="center"
          mt="4" // Top margin for spacing
          boxSize={{ base: "100%", md: "20%" }}
          ml="5"
          mr="5"


      >
        <Box mb={{ base: "4", md: "0" }}>
          {/* First Text */}
          <Text
            fontSize={{ base: "l", md: "xl" }}
            fontWeight="semi-bold"
            color="blue.500"
          >
            WELCOME TO{" "}
            <Text as="span" color="blue.500">
              CHINAR
            </Text>{" "}
            {/* <br /> */}
            <Text as="span" color="green.500">
              QUANTUM AI
            </Text>
          </Text>

          {/* Second Text */}
          <Text fontSize={{ base: "l", md: "sm" }} color="gray.500" mt="2">
            Bridging Academia and the AI Job Market
          </Text>

          {/* Paragraph */}
          <Text fontSize={{ base: "sm", md: "sm" }} mt="2">
            At CQAI, we bridge academia to AI jobs, empowering Kashmir with AI
            solutions. Join our innovative journey, transforming education,
            medicine, and agriculture.
          </Text>

          {/* Button */}
          <Button borderRadius="2" fontSize="13" colorScheme="blue" mt="2"p="2" >
            View Our Products
          </Button>
        </Box>
      </Flex>

      <Flex
        direction="column"
        align="center"
        justify="center"
        mt="4" // Top margin for spacing
        boxSize={{ base: "100%", md: "20%" }}
      >
        {/* Image */}
        <Image
          src="https://chinarquantumai.org/images/photos/g7.webp" // Replace with your image URL
          alt="Example Image"
          boxSize="100%" // Image covers the full box
          objectFit="cover" // Ensure the image covers the box without distortion
          // Optional: Add rounded corners
        />

        {/* Large Text */}
        <Flex alignItems="flex-start">
          <Text fontSize="l" color="blue.500" mt="4" lineHeight="1.5" alignItems="flex-start">
            EXPERIENCE AI EXCELLENCE
          </Text>
        </Flex>

        {/* Small Text */}
        <Text fontSize="sm" mt="2" alignItems="center">
          At CQAI, we offer tailored AI training for excellence in the AI-driven
          world.
        </Text>
      </Flex>

      <Flex
        direction="column"
        align="center"
        justify="center"
        mt="4" // Top margin for spacing
        boxSize={{ base: "100%", md: "20%" }}
      >
        {/* Image */}
        <Image
          src="https://chinarquantumai.org/images/photos/g4.webp" // Replace with your image URL
          alt="Example Image"
          boxSize="100%" // Image covers the full box
          objectFit="cover" // Ensure the image covers the box without distortion
        />

        {/* Large Text */}
        <Text fontSize="l" color="blue.500" mt="4" lineHeight="1.5" alignItems="center">
        LEARNING MADE EASY
        </Text>

        {/* Small Text */}
        <Text fontSize="sm" mt="2" alignItems="center">
        Online AI learning, anywhere. Flexible programs for a bright AI career.
        </Text>
      </Flex>

      <Flex
        direction="column"
        align="center"
        justify="center"
        mt="4" // Top margin for spacing
        boxSize={{ base: "100%", md: "20%" }}
      >
        {/* Image */}
        <Image
          src="https://chinarquantumai.org/images/photos/g6.webp" // Replace with your image URL
          alt="Example Image"
          boxSize="100%" // Image covers the full box
          objectFit="cover" // Ensure the image covers the box without distortion
          // Optional: Add rounded corners
        />

        {/* Large Text */}

        <Text fontSize="l" color="blue.500" mt="4" lineHeight="1.5" alignItems="center">
        MASTERY OF AI SOLUTIONS
        </Text>

        {/* Small Text */}
        <Text fontSize="sm" mt="2" alignItems="center">
        Innovating industries, empowering you to shape a better AI-driven future.
        </Text>
      </Flex>
    </Flex>
  );
};

export default OurFocus;
