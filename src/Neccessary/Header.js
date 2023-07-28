import React from 'react'
import DropCatergory from './DropCatergory'
// import { Link } from 'react-router-dom'
// import DropAbout from './DropAbout'
import { Outlet } from 'react-router-dom'

function Header() {
  

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
          {/* <div className="dropdown"><p>About</p>  
            <div className="fordrop">
              <DropAbout />
            </div>
          </div>
           <div className="dropdown"> <p>Find</p> </div> */}
        </div>
        <nav className='lognav'>
          <li className="li4a"><a href="/" className='navA'>Login</a></li>
          <li className="li4a"><a href="/" className='navA'>Sign Up</a></li>
        </nav>
      </div>

      <Outlet />
    </div>
  )
}

export default Header
