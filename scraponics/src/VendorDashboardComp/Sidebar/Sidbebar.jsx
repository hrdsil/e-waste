import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineDashboard } from 'react-icons/ai';
import { LuShoppingCart } from 'react-icons/lu';
import { AiOutlineSetting, AiOutlineHistory } from 'react-icons/ai'; 
import { TbLogout } from 'react-icons/tb';
import userImage from '../../assets/placeholder.jpg';

// styles 
import classes from './Sidebar.module.css';

const Sidebar = () => {

  const vendor = {
    name: "Almighty Group"
  }


  const navigate = useNavigate();

  return (
    <div className={classes.sidebar}>
      <div className={classes.container}>
        <div className={classes.header}>
          <img className={classes.logo} src={userImage} alt="scraponics" onClick={() => navigate('/')} />
          <h1 className={classes.heading}>{vendor.name}</h1>
        </div>
        <div className={classes.mainMenu}>
          <h1 className={classes.blockHeading}>MAIN MENU</h1>
          <div className={classes.pageBlock} onClick={() => navigate('/dashboardvendor/')}>
            <AiOutlineDashboard className={classes.icon} />
            <p>Overview</p>
          </div>
          <div className={classes.pageBlock} onClick={() => navigate('/dashboardvendor/cart')}>
            <LuShoppingCart className={classes.icon} />
            <p>Cart</p>
          </div>
          <div className={classes.pageBlock} onClick={() => navigate('/dashboardvendor/history')}>
            <AiOutlineHistory className={classes.icon} />
            <p>History</p>
          </div>
        </div>

        <div className={classes.mainMenu}>
          <h1 className={classes.blockHeading}>MANAGEMENT</h1>
          <div className={classes.pageBlock}>
            <AiOutlineSetting className={classes.icon} />
            <p>Settings</p>
          </div>
          <div className={classes.pageBlock}>
            <TbLogout className={classes.icon} />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar