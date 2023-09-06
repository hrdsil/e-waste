import React from 'react';

import idea from '../../assets/idea.png';
import homeimage from '../../assets/homecard.png';

// styles
import classes from './Homecard.module.css';
import SaleCard from '../SaleCard/SaleCard';

const Homecard = () => {
  return (
    <>
      <div className={classes.homecardPadding}>

        <div className={classes.innerBox}>
          <div className={classes.upperBox}>
            <div style={{
              width: '50%'
            }}>
              <img className={classes.homeImage} src={homeimage} alt="home card" />

            </div>
            <div style={{
              width: '50%',
            }}>
              <SaleCard />
            </div>
          </div>
          <div className={classes.lowerBox}>
            <div className={classes.header}>
              <h1>Did you know?</h1>
              <img className={classes.idea} src={idea} alt="idea bulb" />

            </div>
            <div className={classes.content}>
              <p>India is the 3rd largest producer of e-waste. India generates nearly 2 million tons of e waste annually.</p>
              <p>Someone e-Waste is Someone’s Gold. MONETIZE your Gold online and contribute for a green and sustainable future.</p>
              <p>Lets be a part of the circular economy!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homecard;