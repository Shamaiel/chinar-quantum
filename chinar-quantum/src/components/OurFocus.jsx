import { Box, Flex, Image, Text } from "@chakra-ui/react";
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
        <Text fontSize="l" mt="4" lineHeight="1.5" alignItems="flex-start">
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
        <Text fontSize="l" mt="4" lineHeight="1.5" alignItems="center">
          EXPERIENCE AI EXCELLENCE
        </Text>

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
          src="https://chinarquantumai.org/images/photos/g6.webp" // Replace with your image URL
          alt="Example Image"
          boxSize="100%" // Image covers the full box
          objectFit="cover" // Ensure the image covers the box without distortion
          // Optional: Add rounded corners
        />

        {/* Large Text */}
        
        <Text fontSize="l" mt="4" lineHeight="1.5" alignItems="center">
          EXPERIENCE AI EXCELLENCE
        </Text>

        {/* Small Text */}
        <Text fontSize="sm" mt="2" alignItems="center">
          At CQAI, we offer tailored AI training for excellence in the AI-driven
          world.
        </Text>
      </Flex>

    </Flex>
  );
};

export default OurFocus;
