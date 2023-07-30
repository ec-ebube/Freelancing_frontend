import React from 'react'
import DropCatergory from './DropCatergory'
// import { Link } from 'react-router-dom'
// import DropAbout from './DropAbout'
import { Outlet, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  
  const about =() => {
    navigate("/about");
  }

  return (
    <div>

      <div className='header'>
        <div className='fortitle'>
          <h1 className='title'><a href="/">Little Effect</a></h1>
        </div>
        <div className='dropdiv'>
          <div className="dropdown"><p>Categories</p>
            <div className="fordrop">
              <DropCatergory />
            </div>
          </div>
          <div className="dropdown"><p onClick={about}>About</p></div>
           {/* <div className="dropdown"> <p>Find</p> </div> */}
        </div>
        <nav className='lognav'>
          <li className="li4a"><a href="/" className='navA'>Login</a></li>
          <li className="li4a"><a href="/createportfolio" className='navA'>Sign Up</a></li>
        </nav>
      </div>

      <Outlet />
    </div>
  )
}

export default Header
