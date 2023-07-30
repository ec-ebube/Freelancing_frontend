import React from 'react'
import Footer from '../Neccessary/Footer'

function About() {
  return (
    <div className='about'>
      <div className="aboutContent">
        <div className="cardOne">
          <span>Little Effect </span>
          is a multi-National and Univaersial Freelancing website for all careers and Individuals
        </div>
        <div className="cardTwo">
          <span>When Portfolios </span>
          are created, is Simply creates a form of portfolio website for the user, allowing to show case his/her previous projects.
        </div>
        <div className="cardOne">
          <span>With an Advanced Software, </span>
          every User has the same previledge irrespective of his/her history, thus providing all with equal oppurtunity to reach new Clients
        </div>
        <div className="cardTwo">
          <span>Structured in a cycle </span>
          to enable all portfolios interact and thus help each other by using services provided by other portfolios
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
