import React from 'react'
import {Link} from "react-router-dom"

function DropCatergory() {

    const Categories = [
        {
            category: "Coding and Programming",
            link: "/"
        },
        {
            category: "Graphics and Design",
            link: "/"
        },
        {
            category: "Video Editing",
            link: "/"
        },
        {
            category: "Animation",
            link: "/"
        },
        {
            category: "Arts and Drawing",
            link: "/"
        },
        {
            category: "Modelling",
            link: "/"
        },
        {
            category: "Architectural designs",
            link: "/"
        },
        {
            category: "Influencing",
            link: "/"
        },
        {
            category: "Other Services",
            link: "/"
        }
    ]
  return (
    <div>
      {
        Categories.map((data, index) => (
            <div key={index} className='catBlock'>
                <Link to={data.link} className='catLink'> {data.category} </Link>
            </div>
        ))
      }
    </div>
  )
}

export default DropCatergory
