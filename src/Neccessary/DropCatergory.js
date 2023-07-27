import React from 'react'
import { Link } from "react-router-dom"


const exportCat = [];
function DropCatergory() {

    const Categories = [
        {
            category: "Coding and Programming",
            link: "/category/codingandprogramming"
        },
        {
            category: "Graphics and Design",
            link: "/category/graphicsanddesign"
        },
        {
            category: "Video Editing and Animation",
            link: "/category/videoandanimation"
        },
        {
            category: "Arts and Drawing",
            link: "/category/artsanddrawing"
        },
        {
            category: "Music and Melody",
            link: "/category/musicandmelody"
        },
        {
            category: "Modelling",
            link: "/category/modelling"
        },
        {
            category: "Architectural designs",
            link: "/category/architecturaldesigns"
        },
        {
            category: "Influencing",
            link: "/category/influencing"
        },
        {
            category: "Other Services",
            link: "/category/others"
        }
    ]
    // exportCat = Categories;
    for (let index = 0; index < Categories.length; index++) {
        exportCat.push({category: Categories[index].category})
    }
    // return Categories;
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
export const forCategories = exportCat;

export default DropCatergory
