import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TbHomeStats } from 'react-icons/tb';
import { VscOrganization } from 'react-icons/vsc';
import { GrTransaction } from 'react-icons/gr';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { SlGraph } from 'react-icons/sl';
import Logo from '../../assets/logo.png';

// styles 
import classes from './Sidebar.module.css';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.sidebar}>
      <div className={classes.container}>
        <div className={classes.header}>
          <img className={classes.logo} src={Logo} alt="scraponics" onClick={() => navigate('/')} />
          <h1 className={classes.heading}>PUBLIC DASHBOARD</h1>
        </div>
        <div className={classes.mainMenu}>
          <h1 className={classes.blockHeading}>MAIN MENU</h1>
          <div className={classes.pageBlock} onClick={() => navigate('/dashboardpublic/')}>
            <TbHomeStats className={classes.icon} />
            <p>Overview</p>
          </div>
          <div className={classes.pageBlock} onClick={() => navigate('/dashboardpublic/vendorlist')}>
            <VscOrganization className={classes.icon} />
            <p>Vendors List</p>
          </div>
          <div className={classes.pageBlock} onClick={() => navigate('/dashboardpublic/transactions')}>
            <GrTransaction className={classes.icon} />
            <p>Transactions</p>
          </div>
          <div className={classes.pageBlock} onClick={() => navigate('/dashboardpublic/geography')}>
            <GiEarthAfricaEurope className={classes.icon} />
            <p>Geography</p>
          </div>
        </div>

        <div className={classes.mainMenu}>
          <h1 className={classes.blockHeading}>MANAGEMENT</h1>
          <div className={classes.pageBlock}>
            <SlGraph className={classes.icon} />
            <p>Performance</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar