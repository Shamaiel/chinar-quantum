import React from 'react'
import { Flex, Text, Grid, GridItem,  Box, Image } from '@chakra-ui/react';

const OfferingMain = () => {
  
  
    return (
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          mt="30"
          ml={{ base: "0", md: "120" }}
          mr={{ base: "0", md: "120" }}
          gap={4}
          mb={100} 
        >
          
        {/* Grid Item 1 */}
        <GridItem   mb={15}>
          <Flex border="2px" borderColor="grey">
            <Image bg="blue.500" h={90} src="https://chinarquantumai.org/images/icons/ai.png" alt="Kitten" />
            <Flex direction="column" ml="5" alignItems="flex-start">
              <Text fontWeight="bold" fontSize="sm">Tailored AI Training</Text>
              <Text color="gray.500" fontSize="sm">Customized programs for AI career success.</Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex border="2px" borderColor="grey">
            <Image bg="blue.500" h={90} src="https://chinarquantumai.org/images/icons/2.png" alt="Kitten" />
            <Flex direction="column" ml="5" alignItems="flex-start">
              <Text fontWeight="bold" fontSize="sm">Tailored AI Training</Text>
              <Text color="gray.500" fontSize="sm">Customized programs for AI career success.</Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex border="2px" borderColor="grey">
            <Image bg="blue.500" h={90} src="https://chinarquantumai.org/images/icons/3.png" alt="Kitten" />
            <Flex direction="column" ml="5" alignItems="flex-start">
              <Text fontWeight="bold" fontSize="sm">Tailored AI Training</Text>
              <Text color="gray.500" fontSize="sm">Customized programs for AI career success.</Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex border="2px" borderColor="grey">
            <Image bg="blue.500" h={90} src="https://chinarquantumai.org/images/icons/4.png" alt="Kitten" />
            <Flex direction="column" ml="5" alignItems="flex-start">
              <Text fontWeight="bold" fontSize="sm">Tailored AI Training</Text>
              <Text color="gray.500" fontSize="sm">Customized programs for AI career success.</Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex border="2px" borderColor="grey">
            <Image bg="blue.500" h={90} src="https://chinarquantumai.org/images/icons/6.png" alt="Kitten" />
            <Flex direction="column" ml="5" alignItems="flex-start">
              <Text fontWeight="bold" fontSize="sm">Tailored AI Training</Text>
              <Text color="gray.500" fontSize="sm">Customized programs for AI career success.</Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex border="2px" borderColor="grey">
            <Image bg="blue.500" h={90} src="https://chinarquantumai.org/images/icons/5.png" alt="Kitten" />
            <Flex direction="column" ml="5" alignItems="flex-start">
              <Text fontWeight="bold" fontSize="sm">Tailored AI Training</Text>
              <Text color="gray.500" fontSize="sm">Customized programs for AI career success.</Text>
            </Flex>
          </Flex>
        </GridItem>

       
      </Grid>
  )
}

export default OfferingMain
