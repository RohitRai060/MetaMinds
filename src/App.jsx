import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Why from './Components/Way/Why'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
// import Programs1 from './Components/Programs1/Programs1'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subTitle='Our Services' title='What We offer' />
      <Programs/>
     {/* <Programs1/> */}
      <About/>
      <Why/>
      <Contact/>
      <Footer/>

      
      
    </div>
  )
}

export default App