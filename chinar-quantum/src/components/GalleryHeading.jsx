import React from 'react'

const GalleryHeading = () => {
  
    return (
        <Flex>
        <Flex
          direction="column"
          align="flex-start"
          mt="30"
          ml={{ base: "0", md: "120" }}
          mr={{ base: "0", md: "120" }}
        >
          <Text
            fontSize="30"
            fontWeight="semibold"
            textAlign="center"
            position="relative"
            mt={34}
          >
            <Text as="span" color="blue.500">
              OUR
            </Text>{" "}
            <Text as="span" color="green.500">
              GALLERY
            </Text>
            <Text
              as="span"
              position="absolute"
              bottom="-3px"
              left="13%"
              transform="translateX(-50%)"
              w="25%"
              h="2px"
              bg="green.500"
            />
          </Text>
        </Flex>
      </Flex>
  )
}

export default GalleryHeading
