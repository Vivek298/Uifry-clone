import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
    <div className='navbar'>
      <ul>
        <img className='uifry-logo' src="uifry logo.png" alt="uifry logo" />
        <div className='list'>
          <li className='home'>Home</li>
          <li>About</li>
          <li>Pricing</li>
          <li>Features</li>
        </div>
        <button className='download-button'>Download</button>
        
      </ul>
      
    
    </div>
    </div>
   
  );
};

export default Navbar;