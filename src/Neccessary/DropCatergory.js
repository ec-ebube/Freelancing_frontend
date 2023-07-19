import React from 'react'
import { Link } from "react-router-dom"

function DropCatergory() {

    const Categories = [
        {
            category: "Coding and Programming",
            link: "/category/codingandprogramming"
        },
        {
            category: "Graphics and Design",
            link: "/"
        },
        {
            category: "Video Editing and Animation",
            link: "/"
        },
        {
            category: "Arts and Drawing",
            link: "/"
        },
        {
            category: "Music and Melody",
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
