import React from 'react';

import { RiCustomerService2Line } from 'react-icons/ri';

// styles 
import classes from './Dashboard.module.css';

const scrapData = {
  name: 'scrap name',
  category: 'category',
  photo: 'photo'
};

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <h1 className={classes.heading}>Dashboard</h1>
      <div className={classes.dashboardContainer}>
        <div className={classes.leftSide}>
          <div className={classes.dashboardCardContainer}>
            <div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Total Earnings</p>
                  <RiCustomerService2Line className={classes.icon} />
                </div>
                <p className={classes.number}>200</p>
                <div className={classes.box1}>
                  <p>+14%</p>
                  <p>than last month</p>
                </div>
              </div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Today Earnings</p>
                  <RiCustomerService2Line className={classes.icon} />
                </div>
                <p className={classes.number}>12 tons</p>
                <div className={classes.box1}>
                  <p>+14%</p>
                  <p>than yesterday</p>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Weekly Earning</p>
                  <RiCustomerService2Line className={classes.icon} />
                </div>
                <p className={classes.number}>1k tons</p>
                <div className={classes.box1}>
                  <p>+16%</p>
                  <p>than last week</p>
                </div>
              </div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Monthly Earnings</p>
                  <RiCustomerService2Line className={classes.icon} />
                </div>
                <p className={classes.number}>4k tons</p>
                <div className={classes.box1}>
                  <p>+14%</p>
                  <p>than last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.rightSide}>
          <form className={classes.form}>
            <h1>Sell Your Scraps</h1>
            {/* scrap name */}
            <div className={classes.form__group}>
              <input type="text" className={classes.form__control} name='scrap name' placeholder='scrap name' value={scrapData.name} onChange={() => { }} />
            </div>

            {/* scarp category */}
            <div className={classes.form__group}>
              <select className={classes.form__select} name="category" value={scrapData.category} onChange={() => { }}>
                <option value="T.V">talevision</option>
                <option value="CPU">CPU</option>
                <option value="Mobile">Mobile</option>
                <option value="Monitor">Monitor</option>
              </select>
            </div>

            {/* scrap image */}
            <div className={classes.form__group}>
              <input className={classes.form__file} type="file" placeholder='upload scrap image' />
            </div>

            {/* details submit */}
            <div className={classes.form__group}>
              <button className={classes.form__submit} type='submit'>Sell</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Dashboard