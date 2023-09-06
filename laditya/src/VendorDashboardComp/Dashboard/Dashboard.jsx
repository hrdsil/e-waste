import React, { useState } from 'react';

import { RiCustomerService2Line } from 'react-icons/ri';

// styles 
import classes from './Dashboard.module.css';

const data = [
    {
        name: "scraponics",
        price: "120",
        address: "Dibrugarh, Chabua, 786184",
        date: "12-12-12",
    },
    {
        name: "scraponics",
        price: "120",
        address: "Dibrugarh, Chabua, 786184",
        date: "12-12-12",
    },
    {
        name: "scraponics",
        price: "120",
        address: "Dibrugarh, Chabua, 786184",
        date: "12-12-12",
    },
    {
        name: "scraponics",
        price: "120",
        address: "Dibrugarh, Chabua, 786184",
        date: "12-12-12",
    },
    {
        name: "scraponics",
        price: "120",
        address: "Dibrugarh, Chabua, 786184",
        date: "12-12-12",
    },
];

const Dashboard = () => {
    const [selectedOption, setSelectedOption] = useState("");

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
                    <h1 className={classes.heading}>Scraps Deals nearby you</h1>
                    <div className={classes.filterContainer}>
                        <p>Sort by location : </p>
                        <div>
                            <select className={classes.selectForm} value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
                                <option value="price">Dibrugarh</option>
                                <option value="date">Tinsukia</option>
                            </select>
                        </div>
                    </div>
                    <div className={classes.table}>
                        <div className={classes.tableHeading}>
                            <p className={classes.name}>Scrap name</p>
                            <p className={classes.price}>Price</p>
                            <p className={classes.address}>Address</p>
                            <p className={classes.date}>Date</p>
                            <p className={classes.details}>Details</p>
                        </div>

                        {data.map((data, index) => (
                            <div key={index} className={classes.tableContent}>
                                <p className={classes.name}>{data.name}</p>
                                <p className={classes.price}>{data.price}</p>
                                <p className={classes.address}>{data.address}</p>
                                <p className={classes.date}>{data.date}</p>
                                <p className={classes.details}>Details</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard