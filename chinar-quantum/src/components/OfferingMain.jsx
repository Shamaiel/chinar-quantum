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
        <GridItem  mb={15} >
          <Flex  boxShadow="0px 4px 10px rgba(0.1, 0, 0, 0.1)">
            <Image bg="blue.500" h={90} src="https://chinarquantumai.org/images/icons/ai.png" alt="Kitten" />
            <Flex direction="column" ml="5" mt="5" alignItems="flex-start">
              <Text fontWeight="bold" fontSize="md">Tailored AI Training</Text>
              <Text color="gray.500" fontSize="md">Customized programs for AI career success.</Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem  mb={15} >
          <Flex  boxShadow="0px 4px 10px rgba(0.1, 0, 0, 0.1)">
            <Image bg="blue.500" h={90} src="https://chinarquantumai.org/images/icons/ai.png" alt="Kitten" />
            <Flex direction="column" ml="5" mt="5" alignItems="flex-start">
              <Text fontWeight="bold" fontSize="md">Tailored AI Training</Text>
              <Text color="gray.500" fontSize="md">Customized programs for AI career success.</Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem  mb={15} >
          <Flex  boxShadow="0px 4px 10px rgba(0.1, 0, 0, 0.1)">
            <Image bg="blue.500" h={90} src="https://chinarquantumai.org/images/icons/ai.png" alt="Kitten" />
            <Flex direction="column" ml="5" mt="5" alignItems="flex-start">
              <Text fontWeight="bold" fontSize="md">Tailored AI Training</Text>
              <Text color="gray.500" fontSize="md">Customized programs for AI career success.</Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem  mb={15} >
          <Flex  boxShadow="0px 4px 10px rgba(0.1, 0, 0, 0.1)">
            <Image bg="blue.500" h={90} src="https://chinarquantumai.org/images/icons/ai.png" alt="Kitten" />
            <Flex direction="column" ml="5" mt="5" alignItems="flex-start">
              <Text fontWeight="bold" fontSize="md">Tailored AI Training</Text>
              <Text color="gray.500" fontSize="md">Customized programs for AI career success.</Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem  mb={15} >
          <Flex  boxShadow="0px 4px 10px rgba(0.1, 0, 0, 0.1)">
            <Image bg="blue.500" h={90} src="https://chinarquantumai.org/images/icons/ai.png" alt="Kitten" />
            <Flex direction="column" ml="5" mt="5" alignItems="flex-start">
              <Text fontWeight="bold" fontSize="md">Tailored AI Training</Text>
              <Text color="gray.500" fontSize="md">Customized programs for AI career success.</Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem  mb={15} >
          <Flex  boxShadow="0px 4px 10px rgba(0.1, 0, 0, 0.1)">
            <Image bg="blue.500" h={90} src="https://chinarquantumai.org/images/icons/ai.png" alt="Kitten" />
            <Flex direction="column" ml="5" mt="5" alignItems="flex-start">
              <Text fontWeight="bold" fontSize="md">Tailored AI Training</Text>
              <Text color="gray.500" fontSize="md">Customized programs for AI career success.</Text>
            </Flex>
          </Flex>
        </GridItem>

       
      </Grid>
  )
}

export default OfferingMain
