import React from 'react';
import './index.css';

function NavBar() {
    return (
      <div className='navbarContainer'>
        <div className='section-navbar'>
            <p>Architecture</p>
            <p>Furniture</p>
        </div>
        <h2>NEUE</h2>
        <div className='section-navbar'>
            <p>Projects</p>
            <p>Contact</p>
        </div>
      </div>
    );
  }
  
export default NavBar;