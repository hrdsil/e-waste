import React from 'react';

// styles 
import classes from './Cart.module.css';



const sellData = [
  {
    name: "CPU",
    category: "household",
    about: "brand hp",
    date: "12-12-12",
    price: "120"
  },
];


const pickupData = [
  {
    name: "scraponics",
    category: "household",
    vendor: "Assam Almighty group",
    PickUpDate: "12-12-12",
    price: "120"
  },
];

const Cart = () => {
  return (
    <div className={classes.cart}>
      <h1 className={classes.heading}>Cart</h1>

      {/* open for selling scraps */}
      <div className={classes.sell}>
      <h1 className={classes.heading}>Open for sell</h1>
      <div className={classes.table}>
        <div className={classes.tableHeading}>
          <p className={classes.name}>Scrap name</p>
          <p className={classes.category}>Category</p>
          <p className={classes.vendor}>Product Description</p>
          <p className={classes.date}>Date</p>
          <p className={classes.price}>Price(₹)</p>
        </div>

        {sellData.map((data, index) => (
          <div key={index} className={classes.tableContent}>
            <p className={classes.name}>{data.name}</p>
            <p className={classes.category}>{data.category}</p>
            <p className={classes.vendor}>{data.about}</p>
            <p className={classes.date}>{data.date}</p>
            <p className={classes.price}>{data.price}</p>
          </div>
        ))}
        </div>
      </div>

      {/* vendor hasn't pick up yet */}
      <div className={classes.pickup}>
      <h1 className={classes.heading}>Open for pickup</h1>
      <div className={classes.table}>
        <div className={classes.tableHeading}>
          <p className={classes.name}>Scrap name</p>
          <p className={classes.category}>Category</p>
          <p className={classes.vendor}>Vendor Name</p>
          <p className={classes.date}>Pick up Date</p>
          <p className={classes.price}>Price(₹)</p>
        </div>

        {pickupData.map((data, index) => (
          <div key={index} className={classes.tableContent}>
            <p className={classes.name}>{data.name}</p>
            <p className={classes.category}>{data.category}</p>
            <p className={classes.vendor}>{data.vendor}</p>
            <p className={classes.date}>{data.PickUpDate}</p>
            <p className={classes.price}>{data.price}</p>
          </div>
        ))}
        </div>
      </div>

    </div>
  )
}

export default Cart