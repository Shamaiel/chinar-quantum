import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import NavbarMain from './components/NavbarMain';
import Hero from './components/Hero';
import PricingComponent from './components/PricingComponent';
import OurFocus from './components/OurFocus';
import Offerings from './components/Offerings';
import OfferingMain from './components/OfferingMain';
import Trainings from './components/Trainings';
import TrainingsMain from './components/TrainingsMain';

import Tem from './components/Tem';
import Trainers from './components/Trainers';
import TrainersHeadng from './components/TrainersHeadng';
import GalleryHeading from './components/GalleryHeading';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  
  
  return (
    <div className="App">
     <ChakraProvider>
      <Navbar />
      <NavbarMain/>
      <Hero/>
      <PricingComponent/>
      <OurFocus/>
      <Offerings/>
      <OfferingMain/>
      <Trainings/>
      <TrainingsMain/>
    
      <TrainersHeadng/>
      <Trainers/>
      <GalleryHeading/>
      <Gallery/>
      <Footer/>
      
    </ChakraProvider>
    </div>
  );
}

export default App;
