import React from 'react';
import './POne.css';

const POne = () => {
  return (
    <div className='background'>
      <img className='star2' src="Star.png" alt="star" />
      <img className='bg' src="bg.png" alt="bg" />
     
      <div className='part_one'>
        <div className='texts'>
          <h1>make the best financial decisions</h1>
          <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
        </div>
        <div className='buttons'>
          <button className='button-1'><img src="GetStarted.png" alt="Get Started" /></button>
          <button className='button-2'><img src="WatchVideo.png" alt="Watch Video" /></button>
          
          <div className="parent">
          <div className='image'><img src="Ellipse.png" alt="Ellipse" /></div>
          <div className='image-1'><img src="mobile1.png" alt="mobile1" /></div>
          <div className='image-2'><img src="mobile2.png" alt="mobile2" /></div>
          <div className='image-3'><img src="mobile3.png" alt="mobile3" /></div>
          
          </div>

          <div className='ribbon'><img src="ribbon.png" alt="ribbon" /></div>
          
        </div>
      </div>
    </div>
  );
}

export default POne;
