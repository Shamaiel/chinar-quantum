import React from 'react'
import Navbar from '../components/Navbar'
import NavbarMain from '../components/NavbarMain'
import Trainings from '../components/Trainings'
import TrainersHeadng from '../components/TrainersHeadng'
import Footer from '../components/Footer'
import TrainingsMain from '../components/TrainingsMain'



const AllTrainings = () => {
  return (
    <div>
      <Navbar/>
      <NavbarMain/>
        <Trainings/>
        <TrainingsMain/>
      <Footer/>
    </div>
    
  )
}

export default AllTrainings
