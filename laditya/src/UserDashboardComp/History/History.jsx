import React, { useState } from 'react';

// styles
import classes from './History.module.css';

const data = [
  {
    name: "scraponics",
    category: "household",
    vendor: "Assam Almighty group",
    date: "12-12-12",
    price: "120"
  },
  {
    name: "scraponics",
    category: "household",
    vendor: "Assam Almighty group",
    date: "12-12-12",
    price: "120"
  },
  {
    name: "scraponics",
    category: "household",
    vendor: "Assam Almighty group",
    date: "12-12-12",
    price: "120"
  },
  {
    name: "scraponics",
    category: "household",
    vendor: "Assam Almighty group",
    date: "12-12-12",
    price: "120"
  },
  {
    name: "scraponics",
    category: "household",
    vendor: "Assam Almighty group",
    date: "12-12-12",
    price: "120"
  },
];

const History = () => {
  const [selectedOption, setSelectedOption] = useState("");


  return (
    <div className={classes.history}>
      <h1 className={classes.heading}>History</h1>

      <div className={classes.filterContainer}>
        <p>Sort by : </p>
        <div>
          <select className={classes.selectForm} value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
            <option value="price">price</option>
            <option value="date">date</option>
          </select>
        </div>
      </div>

      <div className={classes.table}>
        <div className={classes.tableHeading}>
          <p className={classes.name}>Scrap name</p>
          <p className={classes.category}>Category</p>
          <p className={classes.vendor}>Vendor Name</p>
          <p className={classes.date}>Date</p>
          <p className={classes.price}>Price(₹)</p>
        </div>

        {data.map((data, index) => (
          <div key={index} className={classes.tableContent}>
            <p className={classes.name}>{data.name}</p>
            <p className={classes.category}>{data.category}</p>
            <p className={classes.vendor}>{data.vendor}</p>
            <p className={classes.date}>{data.date}</p>
            <p className={classes.price}>{data.price}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default History