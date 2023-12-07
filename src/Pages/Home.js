import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Participation from '../Components/Participation';
import Filler_politics from '../Components/Filler_politics';
import Banner from '../Components/Banner';

const Home = () => (
  <div className='overflow-hidden'>
    <Navbar />
    <div className='mt-40'>
    </div>
    <div>
      <Banner />
    <Participation />
    <Filler_politics/>
    </div>
    <footer>
      <Footer className='pb-4 pt-10'/>
    </footer>
  </div>
)

export default Home

