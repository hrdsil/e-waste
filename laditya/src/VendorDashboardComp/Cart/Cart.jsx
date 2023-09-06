import React from 'react';

// styles 
import classes from './Cart.module.css';

const pickupData = [
  {
    name: "scraponics",
    category: "household",
    address: "Silchar, 786184",
    PickUpDate: "12-12-12",
    price: "120"
  },
];

const Cart = () => {
  return (
    <div className={classes.cart}>
      <h1 className={classes.heading}>Cart</h1>

      {/* vendor hasn't pick up yet */}
      <div className={classes.pickup}>
      <h1 className={classes.heading}>Scraps to be pick up</h1>
      <div className={classes.table}>
        <div className={classes.tableHeading}>
          <p className={classes.name}>Scrap name</p>
          <p className={classes.category}>Category</p>
          <p className={classes.address}>Address</p>
          <p className={classes.date}>Pick up Date</p>
          <p className={classes.price}>Price(₹)</p>
        </div>

        {pickupData.map((data, index) => (
          <div key={index} className={classes.tableContent}>
            <p className={classes.name}>{data.name}</p>
            <p className={classes.category}>{data.category}</p>
            <p className={classes.address}>{data.address}</p>
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