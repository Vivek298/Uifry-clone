import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <div className='premium-container'>
   
    <div className='mobile-container'>
    <img className='ellipse' src="bg.png" alt="Ellipse Background" />
    <img className='staar' src="Star.png" alt="Star" />
    <div className='mobile-image'>
      <img src="phnimg1.png" alt="phnimg1" />
    </div>
    <div className='content'>
      <h2>Features</h2>
      <h1>Uifry Premium</h1>
      <div className='feature'>
        <img src="star-05.png" alt="star" />
        <div>
          <h3>Budgeting Intervals</h3>
          <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
        </div>
      </div>
      <div className='feature'>
        <img src="cube-02.png" alt="cube-02" />
        <div>
          <h3>Budgeting Intervals</h3>
          <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
        </div>
      </div>
      <div className='feature'>
        <img src="cube-04.png" alt="cube-04" />
        <div>
          <h3>Budgeting Intervals</h3>
          <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
        </div>
      </div>
      <div className='right-bg'><img src="bg1.png" alt="bg1" /></div>
    </div>
  </div>
  </div>
  
  
);
}

export default Features