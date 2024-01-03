import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import NavbarMain from './components/NavbarMain';
import Hero from './components/Hero';
import PricingComponent from './components/PricingComponent';
import OurFocus from './components/OurFocus';

function App() {
  
  
  return (
    <div className="App">
     <ChakraProvider>
      <Navbar />
      <NavbarMain/>
      <Hero/>
      <PricingComponent/>
      <OurFocus/>

      {/* Add the rest of your content here */}
    </ChakraProvider>
    </div>
  );
}

export default App;
