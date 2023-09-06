import React from 'react';

import classes from './MenuItem.module.css';

const MenuItem = ({label}) => {
  return (
    <div className={classes.menuItem}>
        {label}
    </div>
  )
}

export default MenuItem