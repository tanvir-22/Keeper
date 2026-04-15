import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import HomeSection from './components/HomeSection'
import Footer from './components/Footer'
import Details from './components/Details'
import TimeLine from './components/TimeLine'

const App = () => {
  return (
    <>
      <Navbar/>
    
        {/* <Banner/>
      <HomeSection/> */}
      {/* <Details/> */}
      <TimeLine/>
      <Footer/>
    </>
  )
}

export default App