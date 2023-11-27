import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className="nav">
        <div className="nav-logo">
            TeslaBD
        </div>
        <ul className="nav-menu">
            <li>Home</li>
              <li>Explore</li>
              <li>About</li>
              <li className='nav-contract'>Contract</li>
        </ul>
    </div>
  )
}

export default Navbar