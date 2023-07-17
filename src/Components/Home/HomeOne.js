import React from 'react'
// import BusiClass from "../../Assets/Images/business.jpg"
import arrow_forward from "../../Assets/Icons/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg"

function HomeOne() {
  return (
    <div className='home1'>
      <div className="home1content">
        <div className="home1th">
          <div className="introtext">
            Build Your
            <div className="flip">
              <div><div>Portfolio</div></div>
              <div><div>Career</div></div>
              <div><div>Empire</div></div>
            </div>
            Today
          </div>
          {/* <div className="desImg">
            <img src={BusiClass} alt="Boy" />
          </div> */}
        </div>
        <button className='startbtn' >Start Now<img src={arrow_forward} alt="" className='arrowIcon'/></button>
      </div>
    </div>
  )
}

export default HomeOne
