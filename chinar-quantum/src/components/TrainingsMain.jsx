
import React, { useState, useEffect } from 'react';
import { Stack, Image, Text, ButtonGroup, Button } from '@chakra-ui/react';
import {  useBreakpointValue } from '@chakra-ui/react';



const Slideshow = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const cardDisplayCount = useBreakpointValue({ base: 1, md: 4 });
 
    useEffect(() => {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, [data.length]);
  
    return (
      <Stack mb="50px" mt="40px" ml="7%" mr="9%" spacing={4} direction="row">
        {data.slice(activeIndex, activeIndex + cardDisplayCount).map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </Stack>
    );
  };
  
 


// const Card = ({ data }) => (
    
//   <Stack w={cardWidth}>
//     <Image src={data.image} alt={data.alt} w="100%" />
    
//     <Stack ml="4" mr="4" mt="6" spacing="3">
//       <Text textAlign="left" fontSize="24px">
//         {data.title}
//       </Text>
//       <Text textAlign="left" color="grey.500">
//         {data.description}
//       </Text>
//       <ButtonGroup mt="5" spacing="2">
//         <Button textAlign="center" variant="solid" colorScheme="blue">
//           {data.btnText}
//         </Button>
//       </ButtonGroup>
//     </Stack>

//   </Stack>
// );

const Card = ({ data }) => {
    const cardWidth = useBreakpointValue({ base: '100%', md: '19%' });
  
    return (
      <Stack mb="80px" bg="gray.100" w={cardWidth}>
        
        <Image src={data.image} alt={data.alt} w="100%" />
        <Stack  ml="4" mr="4" mt="6" spacing="3">
          <Text textAlign="left" fontSize="24px">
            {data.title}
          </Text>
          <Text textAlign="left" color="grey.500">
            {data.description}
          </Text>
          <ButtonGroup  mt="5" spacing="1">
            <Button  textAlign="center" variant="solid" colorScheme="blue">
              {data.btnText}
            </Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    );
  };

// Usage example
const TrainingsMain = () => {
    const data = [
            {
              image: "https://chinarquantumai.org/images/photos/14.webp",
              title: "Machine Learning",
              description:
                "Introduction to the core concepts of data science, including data analysis, visualization, and statistical modeling.",
              btnText: "Register Now",
            },
            {
              image: "https://chinarquantumai.org/images/photos/15.webp",
              title:
                "Python for DS",
              description: " An in-depth study of machine learning algorithms and techniques for predictive modeling applications.",
              btnText: "Register Now",
            },
            {
              image: "https://chinarquantumai.org/images/photos/g10.webp",
              title: "Deep Learning",
              description:
                "Advanced courses on deep learning, convolutional neural networks (CNNs), and recurrent neural networks (RNNs).",
              btnText: "Register Now",
            },
            {
              image: "https://chinarquantumai.org/images/photos/13.webp",
              title: "Big Data",
              description:
                "Comprehensive training in Python, a widely used and versatile programming language for Al and data science.",
              btnText: "Register Now",
            },
            {
              image: "https://chinarquantumai.org/images/photos/16.webp",
              title: "Data Analytics",
              description:
                "Exploring the Power of Apache Spark for Distributed Data Processing and Efficiently Handling Large Datasets.",
              btnText: "Register Now",
            },

            {
                image: "https://chinarquantumai.org/images/photos/14.webp",
                title: "Machine Learning",
                description:
                  "Introduction to the core concepts of data science, including data analysis, visualization, and statistical modeling.",
                btnText: "Register Now",
              },
              {
                image: "https://chinarquantumai.org/images/photos/14.webp",
                title: "Machine Learning",
                description:
                  "Introduction to the core concepts of data science, including data analysis, visualization, and statistical modeling.",
                btnText: "Register Now",
              },
              {
                image: "https://chinarquantumai.org/images/photos/15.webp",
                title:
                  " Python for DS",
                description: "An in-depth study of machine learning algorithms and techniques for predictive modeling applications.",
                btnText: "Register Now",
              },
              {
                image: "https://chinarquantumai.org/images/photos/g10.webp",
                title: "Deep Learning",
                description:
                  "Advanced courses on deep learning, convolutional neural networks (CNNs), and recurrent neural networks (RNNs).",
                btnText: "Register Now",
              },
              {
                image: "https://chinarquantumai.org/images/photos/13.webp",
                title: "Big Data",
                description:
                  "Comprehensive training in Python, a widely used and versatile programming language for Al and data science.",
                btnText: "Register Now",
              },
              {
                image: "https://chinarquantumai.org/images/photos/16.webp",
                title: "Data Analytics",
                description:
                  "Exploring the Power of Apache Spark for Distributed Data Processing and Efficiently Handling Large Datasets.",
                btnText: "Register Now",
              },
  
              {
                  image: "https://chinarquantumai.org/images/photos/14.webp",
                  title: "Machine Learning",
                  description:
                    "Introduction to the core concepts of data science, including data analysis, visualization, and statistical modeling.",
                  btnText: "Register Now",
                },
                {
                    image: "https://chinarquantumai.org/images/photos/14.webp",
                    title: "Machine Learning",
                    description:
                      "Introduction to the core concepts of data science, including data analysis, visualization, and statistical modeling.",
                    btnText: "Register Now",
                  },
                  {
                    image: "https://chinarquantumai.org/images/photos/15.webp",
                    title:
                      "Python for DataS",
                    description: "An in-depth study of machine learning algorithms and techniques for predictive modeling applications.",
                    btnText: "Register Now",
                  },
                  {
                    image: "https://chinarquantumai.org/images/photos/g10.webp",
                    title: "Deep Learning",
                    description:
                      "Advanced courses on deep learning, convolutional neural networks (CNNs), and recurrent neural networks (RNNs).",
                    btnText: "Register Now",
                  },
                  {
                    image: "https://chinarquantumai.org/images/photos/13.webp",
                    title: "Big Data",
                    description:
                      "Comprehensive training in Python, a widely used and versatile programming language for Al and data science.",
                    btnText: "Register Now",
                  },
  

         
          ];
   
  return <Slideshow data={data} />;
};

export default TrainingsMain;



// const Slideshow = ({ data }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 5000);

//     return () => clearInterval(intervalId); 
//   }, [data.length]);

//   return (
//     <Stack  mb="50px" mt="40px" ml="7%" mr="9%" spacing={4} direction="row">
//       {data.slice(activeIndex, activeIndex + 5).map((item, index) => (
//         <Card key={index} data={item} />
//       ))}
//     </Stack>
//   );
// };


















