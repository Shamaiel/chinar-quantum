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

import Trainers from './components/Trainers';
import TrainersHeadng from './components/TrainersHeadng';
import GalleryHeading from './components/GalleryHeading';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import HeroM from './components/HeroM';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom';
import AllTrainings from './pages/AllTrainings';

function App() {
  
  
  return (
    <div className="App">
       
    
   

     <ChakraProvider>
        <Routes>
           <Route path={"/alltrainings"} element={<AllTrainings/>} />
           <Route path={"/"}  />

        </Routes> 
      <Navbar />
      <NavbarMain/>
      {/* <Hero/> */}
      <HeroM/>
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
      {/* <Nav/> */}
    
    
      
    </ChakraProvider>
   
    </div>
  );
}

export default App;
