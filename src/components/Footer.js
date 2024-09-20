import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='grids'>
    <div className='grid1'>
     <img src="uifry logo.png" alt="Logo" />
     <div className="mail">
      <img src="mail-logo.png" alt="mail-logo" />
      <p>Help@Frybix.com</p>
     </div>
     <div className="contect">
      <img src="contact-logo.png" alt="contact-logo" />
      <p>+1 234 456 678 89</p>
     </div>
    </div>
    <div className='grid2'>
     <h1>Links</h1>
     <p>Home</p>
     <p>About Us</p>
     <p>Booking</p>
     <p>Blog</p>
    </div>
    <div className='grid3'>
     <h1>Legal</h1>
     <p>Terms Of Use</p>
     <p>Privacy Policy</p>
     <p>Cookie Policy</p>
    </div>
    <div className='grid4'>
    <h1>Product</h1>
    <p>Take Tour</p>
    <p>Live Chat</p>
    <p>Reviews</p>
    </div>
    <div className='grid5'>
    <h1>Newsletter</h1>
    <p>Stay Up To Date</p>
     <div className="uptodate">
     <input type="text" placeholder = 'Your Email'className='mail-input'/>
    <button className='Subscribe-button'>Subscribe</button>
    </div>
    </div>
    </div>
    <div className='copyright'>
    <h1>Copyright 2022 Uifry.com All Rights Reserved</h1>
    </div>
    </div>
  )
}

export default Footer