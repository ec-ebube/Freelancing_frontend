import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeOne() {
 const navigate = useNavigate();
  const toCreatePort = () => {
    navigate("/createportfolio")
  }

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
          <div className="welcomeDiv">
            <p className="welcomeText">
            Trusted and used by Millions on both ends of every service Industry
            </p>
          </div>
        </div>
        <div className="forbtn">
          <button className='startbtn' onClick={toCreatePort}>
            <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="48" className='arrowIcon'>
              <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
            </svg>
            Start Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeOne
