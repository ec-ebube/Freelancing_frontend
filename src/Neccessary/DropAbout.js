import React from 'react'
import { Link } from 'react-router-dom'

function DropAbout() {

    const About = [
        {
          name: "About Us",
          link: "/"
        },
        {
          name: "Contact Us",
          link: "/"
        }
      ]

  return (
    <div>
    {
      About.map((e, i) => (
        <div key={i} className='catBlock'>
          <Link to={e.link} className='catLink'>{e.name}</Link>
        </div>
      ))
    }
  </div>
  )
}

export default DropAbout
