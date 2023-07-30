import React from 'react'
import HomeOne from './Home/HomeOne';
import HomeTwo from './Home/HomeTwo';
import Footer from '../Neccessary/Footer';
// import Loading from '../Neccessary/Loading';

function Home() {
  return (
    <div>
      <HomeOne />
      <HomeTwo />
      {/* <Loading /> */}
      <Footer />
    </div>
  )
}

export default Home
