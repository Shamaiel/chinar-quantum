import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

const PricingComponent = () => {
 
 
    return (
    <Box mt="9">
      <Center>
        <Text fontSize="xl" fontWeight="medium" mb="2" color="blue.400">
          OUR
          <Text display="inline" color="green.500">
            {' '}
            P
          </Text>
          <Text display="inline" color="green.500">
            R
          </Text>
          <Text display="inline" color="green.500">
            I
          </Text>
          <Text display="inline" color="green.500">
            C
          </Text>
          <Text display="inline" color="green.500">
            I
          </Text>
          <Text display="inline" color="green.500">
            N
          </Text>
          <Text display="inline" color="green.500">
            G
          </Text>
        </Text>
      </Center>

      <Center>
        <Text fontSize="2xl" fontWeight="bold">
          Starting at just{' '}
          <Text as="span" fontWeight="bold">
            9.5k INR!
          </Text>
        </Text>
      </Center>
    </Box>
  );
};

export default PricingComponent;
