// import { Stack , Button, ButtonGroup, Text, Image} from '@chakra-ui/react'
// import React from 'react'
// import {  useBreakpointValue } from '@chakra-ui/react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const TrainerSlideshow = ({data}) => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 2000,
//         cssEase: "linear",
//         responsive: [
//           {
//             breakpoint: 768, // Adjust this breakpoint as needed
//             settings: {
//               slidesToShow: 1,
//             },
//           },
//         ],
//       };

//     return (
//         <Stack w="100%" mb="50px" mt="40px" ml="7%" mr="9%" spacing={4} direction="row">
//          <Slider {...settings}>
//         {data.map((item, index) => (
//           <Card key={index} data={item} />
//         ))}
//          </Slider>
//       </Stack>
//   )
// }

// const Card = ({ data }) => {
//     // const cardWidth = useBreakpointValue({ base: '100%', md: '19%' });

//     return (
//       <Stack mb="80px" bg="gray.100" w="30%">

//         <Image src={data.image} alt={data.alt} w="100%" />
//         <Stack  ml="4" mr="4" mt="6" spacing="3">
//           <Text textAlign="left" fontSize="24px">
//             {data.title}
//           </Text>
//           <Text textAlign="left" color="grey.500">
//             {data.description}
//           </Text>
//           <ButtonGroup  mt="5" spacing="1">
//             <Button  textAlign="center" variant="solid" colorScheme="blue">
//               {data.btnText}
//             </Button >
//           </ButtonGroup>
//         </Stack>
//       </Stack>
//     );
//   };

//   const Trainers = () => {
//     const data = [
//         {
//           image: "https://chinarquantumai.org/images/photos/14.webp",
//           title: "Machine Learning",
//           description:
//             "Introduction to the core concepts of data science, including data analysis, visualization, and statistical modeling.",
//           btnText: "Register Now",
//         },
//         {
//           image: "https://chinarquantumai.org/images/photos/15.webp",
//           title:
//             "Python for DS",
//           description: " An in-depth study of machine learning algorithms and techniques for predictive modeling applications.",
//           btnText: "Register Now",
//         },
//         {
//           image: "https://chinarquantumai.org/images/photos/g10.webp",
//           title: "Deep Learning",
//           description:
//             "Advanced courses on deep learning, convolutional neural networks (CNNs), and recurrent neural networks (RNNs).",
//           btnText: "Register Now",
//         },
//         {
//           image: "https://chinarquantumai.org/images/photos/13.webp",
//           title: "Big Data",
//           description:
//             "Comprehensive training in Python, a widely used and versatile programming language for Al and data science.",
//           btnText: "Register Now",
//         },

//       ];

//     return <TrainerSlideshow data={data} />
//   }

//   export default Trainers
// import { Stack, Button, ButtonGroup, Text, Image } from '@chakra-ui/react';
// import React from 'react';
// import { useBreakpointValue } from '@chakra-ui/react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const TrainerSlideshow = ({ data }) => {
//   const settings = {
//     dots: true,
//     // infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     // autoplay: true,
//     // speed: 2000,
//     // autoplaySpeed: 2000,

//     responsive: [
//       {
//         breakpoint: 768, // Adjust this breakpoint as needed
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Stack w="100%" mb="50px" mt="40px" ml="7%" mr="7%" spacing={4} direction="row">
//       <Slider {...settings}>
//         {data.map((item, index) => (
//           <Card key={index} data={item} />
//         ))}
//         </Slider>

//     </Stack>
//   );
// };

// const Card = ({ data }) => {
//   return (
//     <Stack mb="80px" bg="gray.100" w={['100%', '30%']}>
//       <Image src={data.image} alt={data.alt} w="100%" />
//       <Stack ml="4" mr="4" mt="6" spacing="3">
//         <Text textAlign="left" fontSize="24px">
//           {data.title}
//         </Text>
//         <Text textAlign="left" color="grey.500">
//           {data.description}
//         </Text>
//         <ButtonGroup mt="5" spacing="1">
//           <Button textAlign="center" variant="solid" colorScheme="blue">
//             {data.btnText}
//           </Button>
//         </ButtonGroup>
//       </Stack>
//     </Stack>
//   );
// };

// const Trainers = () => {
//   const data = [
//     {
//       image: 'https://chinarquantumai.org/images/photos/14.webp',
//       title: 'Machine Learning',
//       description:
//         'Introduction to the core concepts of data science, including data analysis, visualization, and statistical modeling.',
//       btnText: 'Register Now',
//     },
//     {
//       image: 'https://chinarquantumai.org/images/photos/15.webp',
//       title: 'Python for DS',
//       description:
//         'An in-depth study of machine learning algorithms and techniques for predictive modeling applications.',
//       btnText: 'Register Now',
//     },
//     {
//       image: 'https://chinarquantumai.org/images/photos/g10.webp',
//       title: 'Deep Learning',
//       description:
//         'Advanced courses on deep learning, convolutional neural networks (CNNs), and recurrent neural networks (RNNs).',
//       btnText: 'Register Now',
//     },
//     {
//       image: 'https://chinarquantumai.org/images/photos/13.webp',
//       title: 'Big Data',
//       description:
//         'Comprehensive training in Python, a widely used and versatile programming language for AI and data science.',
//       btnText: 'Register Now',
//     },
//   ];

//   return <TrainerSlideshow data={data} />;
// };

// export default Trainers;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Trainers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1024, // medium screens
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600, // small screens
          settings: {
            slidesToShow: 1,
          },
        },
      ],
  };

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-white  text-black">
              <div className="h-56 bg-indigo-500 flex justify-center items-center ">
                <img src={d.img} alt="" className="h-100 w-100" />
              </div>

              <div className="flex flex-col  border-b border-green-400 mt-7 bg-gray-100 items-center justify-center gap-4 p-4">
                <p className="text-xl text-green-500 font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className="bg-indigo-500 text-white font-bold text-lg px-6 py-1 rounded-xl">
                {/* <img className="w-5 h-5 mr-2" src="." /> */}
                  in
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Ifrah Sahkeel`,
    img: `https://chinarquantumai.org/images/photos/ifra.webp`,
    review: `Data science intern`,
    linkidin_url: `https://www.linkedin.com/in/ifrah-shiekh-5447ab274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`,
  },
  {
    name: `Dr Rukshan ul Haq`,
    img: `https://chinarquantumai.org/images/photos/12.webp`,
    review: `Founder Kims`,
    linkidin_url: `https://www.linkedin.com/in/rukhsan-ul-haq-ph-d-1163503b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`,
  },
  {
    name: `Junaid Akhtar`,
    img: `https://chinarquantumai.org/images/photos/junaid.webp`,
    review: `CTO-CQAI`,
    linkidin_url: `https://www.linkedin.com/in/junaid-akhter-bbaa371b8/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`,
  },
  {
    name: `Neelam Firdous`,
    img: `https://chinarquantumai.org/images/photos/neelam.webp`,
    review: `Head Operations`,
    linkidin_url: `https://www.linkedin.com/in/neelam-firdous-k-881952a0/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`,
  },
  {
    name: `Moeen ul Haq`,
    img: `https://chinarquantumai.org/images/photos/moeen.webp`,
    review: `Data science  intern`,
    linkidin_url: `https://www.linkedin.com/in/moeenulislam/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`,
  },
  {
    name: `Humayun Ashraf`,
    img: `https://chinarquantumai.org/images/photos/humayun.webp`,
    review: `Data science  intern`,
    linkidin_url: `https://www.linkedin.com/in/humayun-ashraf-bb71b11a0/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`,
  },
];

export default Trainers;
