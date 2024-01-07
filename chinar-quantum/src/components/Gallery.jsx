
// import React from 'react';
// import { Grid, Image, Box, useBreakpointValue } from '@chakra-ui/react';

// const Gallery = () => {
//   const containerWidth = useBreakpointValue({ base: '100%', md: '70%'  });
//   const imageWidth = useBreakpointValue({ base: '100%', md: '27%' });

//   return (
//     <Box width="full" margin="auto" maxWidth={containerWidth} mt={10}>
//       <Grid templateColumns={['100%', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={4}>
//         <Image
//           src="https://chinarquantumai.org/images/photos/instagram.webp"
//           alt="Image 1"
//           boxSize={imageWidth}
//           objectFit="cover"
//           borderRadius="md"
//         />
//         <Image
//           src="https://chinarquantumai.org/images/photos/g2.webp"
//           alt="Image 2"
//           boxSize={imageWidth}
//           objectFit="cover"
//           borderRadius="md"
//         />
//         <Image
//           src="https://chinarquantumai.org/images/photos/gallery_img_3.webp"
//           alt="Image 3"
//           boxSize={imageWidth}
//           objectFit="cover"
//           borderRadius="md"
//         />
//         <Image
//           src="https://chinarquantumai.org/images/photos/gallery_img_2.webp"
//           alt="Image 4"
//           boxSize={imageWidth}
//           objectFit="cover"
//           borderRadius="md"
//         />
//         <Image
//           src="https://chinarquantumai.org/images/photos/gallery_img_1.webp"
//           alt="Image 5"
//           boxSize={imageWidth}
//           objectFit="cover"
//           borderRadius="md"
//         />
//         <Image
//           src="https://chinarquantumai.org/images/photos/gallery_img_6.webp"
//           alt="Image 6"
//           boxSize={imageWidth}
//           objectFit="cover"
//           borderRadius="md"
//         />
//       </Grid>
//     </Box>
//   );
// };

// export default Gallery;

import React from 'react';
import { Grid, Image, Box, useBreakpointValue } from '@chakra-ui/react';

const Gallery = () => {
  const containerWidth = useBreakpointValue({ base: '100%', md: '70%'});
  const imageWidth = useBreakpointValue({ base: '100%', md: '27%'}); // Adjusted for large screens

  return (
    <Box width="full" margin="auto" maxWidth={containerWidth} mt={10}>
      <Grid templateColumns={['100%', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={4}>
        <Image
          src="https://chinarquantumai.org/images/photos/instagram.webp"
          alt="Image 1"
          boxSize="100%"
          objectFit="cover"
          borderRadius="md"

        />
        <Image
          src="https://chinarquantumai.org/images/photos/g2.webp"
          alt="Image 2"
          boxSize="100%"
          objectFit="cover"
          borderRadius="md"
        />
        <Image
          src="https://chinarquantumai.org/images/photos/gallery_img_3.webp"
          alt="Image 3"
          boxSize="100%"
          objectFit="cover"
          borderRadius="md"
        />
        <Image
          src="https://chinarquantumai.org/images/photos/gallery_img_2.webp"
          alt="Image 4"
          boxSize="100%"
          objectFit="cover"
          borderRadius="md"
        />
        <Image
          src="https://chinarquantumai.org/images/photos/gallery_img_1.webp"
          alt="Image 5"
          boxSize="100%"
          objectFit="cover"
          borderRadius="md"
        />
        <Image
          src="https://chinarquantumai.org/images/photos/gallery_img_6.webp"
          alt="Image 6"
          boxSize="100%"
          objectFit="cover"
          borderRadius="md"
        />
  <Image
          src="https://chinarquantumai.org/images/photos/gallery_img_7.webp"
          alt="Image 4"
          boxSize="100%"
          objectFit="cover"
          borderRadius="md"
        />
        <Image
          src="https://chinarquantumai.org/images/photos/gallery_img_8.webp"
          alt="Image 5"
          boxSize="100%"
          objectFit="cover"
          borderRadius="md"
        />
        <Image
          src="https://chinarquantumai.org/images/photos/gallery_img_5.webp"
          alt="Image 6"
          boxSize="100%"
          objectFit="cover"
          borderRadius="md"
        />

      </Grid>
    </Box>
  );
};

export default Gallery;


