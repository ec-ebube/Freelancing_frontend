import React from 'react'
import BoyImg from "../../Assets/Images/Boy.png"

function HomeOne() {
  return (
    <div className='home1'>
      <div className="home1content">
        <div>

          <div className="introtext">
            Build Your
            <div className="flip">
              <div><div>Portfolio</div></div>
              <div><div>Career</div></div>
              <div><div>Empire</div></div>
            </div>
            Today
          </div>
          <div className="desImg">
            <img src={BoyImg} alt="Boy" />
          </div>
        </div>
        <button className='startbtn' >Start Now </button>
      </div>
    </div>
  )
}

export default HomeOne
