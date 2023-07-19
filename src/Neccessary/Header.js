import React from 'react'
import DropCatergory from './DropCatergory'
// import { Link } from 'react-router-dom'
import DropAbout from './DropAbout'
import { Outlet } from 'react-router-dom'

function Header() {
  

  return (
    <div>

      <div className='header'>
        <div className='fortitle'>
          <h1 className='title'><a href="/">Little Effect</a></h1>
        </div>
        <div className='dropdiv'>
          <p className="dropdown">Categories
            <div className="fordrop">
              <DropCatergory />
            </div>
          </p>
          <p className="dropdown"> About 
            <div className="fordrop">
              <DropAbout />
            </div>
          </p>
          <p className="dropdown"> Find </p>
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
