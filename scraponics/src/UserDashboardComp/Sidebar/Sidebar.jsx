import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineDashboard } from 'react-icons/ai';
import { LuShoppingCart } from 'react-icons/lu';
import { AiOutlineSetting, AiOutlineHistory } from 'react-icons/ai'; 
import { TbLogout } from 'react-icons/tb';
import userImage from '../../assets/placeholder.jpg';

// styles 
import classes from './Sidebar.module.css';

const Sidebar = () => {
  const userProfile = useSelector((state) => state.authReducer.authData);


  const navigate = useNavigate();

  return (
    <div className={classes.sidebar}>
      <div className={classes.container}>
        <div className={classes.header}>
          <img className={classes.logo} src={userProfile[0].profilePicture || userImage} alt="scraponics" onClick={() => navigate('/')} />
          <h1 className={classes.heading}>{userProfile[0].name}</h1>
        </div>
        <div className={classes.mainMenu}>
          <h1 className={classes.blockHeading}>MAIN MENU</h1>
          <div className={classes.pageBlock} onClick={() => navigate('/dashboarduser/')}>
            <AiOutlineDashboard className={classes.icon} />
            <p>Overview</p>
          </div>
          <div className={classes.pageBlock} onClick={() => navigate('/dashboarduser/cart')}>
            <LuShoppingCart className={classes.icon} />
            <p>Cart</p>
          </div>
          <div className={classes.pageBlock} onClick={() => navigate('/dashboarduser/history')}>
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