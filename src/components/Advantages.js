// Advantages.js
import React from 'react';
import './Advantages.css';


const Advantages = () => {
  return (
    <div className="main">
      <div className="notify">
        <div className="ad-content">
          <h2 className="section-title">ADVANTAGES</h2>
          <h1 className="main-title">Why Choose Uifry?</h1>
          <div className="clever-noti">
            <img src='bell.png' alt="bell" className="bell-icon" />
            <h3>Clever Notifications</h3>
          </div>
          <p className="notification-description">
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acomusan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
          </p>
        </div>
        <div className="mb-img">
          <img src='Star.png' alt="Star" className="star-icon" />
          <img src='notify.png' alt="Phone" className="phone-image" />
          <img src='On Hold.png' alt="On Hold" className="on-hold-image" />
        </div>
      </div>
      <div className="custom">
       <div className='custom-phoneimg'>
        <img src="phnimg1.png" alt="phnimg" />
        <img src="card.png" alt="card" className='card'/>
        <img src="Star.png" alt="Star" className='star3'/>
        
       </div>
       <div className='custom-content'>
        <div className='logo-head'>
         <img src="pink-star.png" alt="pink-star" />
         <h4 className='custom-heading'>Fully Customizable</h4>
        </div>
        <div>
         <p className='custom-para'>Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acomusan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.</p>
         <img src="Star.png" alt="Star" className='star4' />
        </div>
       </div>
      </div>
      <div className="testimonial">
       <div className='testimonial-heading'>
         <h1>Testimonial</h1>
         <h2>What Our Users Say About Us?</h2>
         
       </div>
       <div className='about'>
       <div className='About-images'>
        <img src="About.png" alt="AboutUs" className='About-frame'/>
        <img src="Star.png" alt="Star" className='star5'/>
       </div>
       <div className='About-content'>
       <h1 className='best-app'>The Best Financial Accounting App Ever!</h1>
       <p className='best-para'>"Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acomusan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam."</p>
       <img src="Group dots.png" alt="Group dots" className='group-dots'/>
       <p className='nick'>Nick Jones</p>
       </div>
       </div>
      </div>
    </div>
  );
}

export default Advantages;
