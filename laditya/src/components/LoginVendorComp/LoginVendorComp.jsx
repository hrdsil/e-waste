import React, { useState } from 'react';

import loginImage from '../../assets/login.png'

// styles
import classes from './LoginVendorComp.module.css';

const LoginVendorComp = () => {

  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });


  return (
    <div className={classes.login}>
      <div className={classes.header}>
        <h1 className={classes.heading}>Welcome back!</h1>
      </div>


      <div className={classes.formContainer}>
        <img className={classes.image} src={loginImage} alt="login" />
        <form className={classes.form} onSubmit={() => { }}>
          {/* user email */}
          <div className={classes.inputwrapper}>
            <p className={classes.label}>Email : </p>
            <div className={classes.form__group}>
              <input type="email" className={classes.form__email} name='user Email' placeholder='Enter your email' value={userDetails.email} onChange={() => { }} />
            </div>
          </div>

          {/* user password */}
          <div className={classes.inputwrapper}>
            <p className={classes.label}>Password : </p>
            <div className={classes.form__group}>
              <input type="password" className={classes.form__password} name='password' placeholder='Enter your password' value={userDetails.password} onChange={() => { }} />
            </div>
          </div>

          {/* confirm passowrd */}
          <div className={classes.inputwrapper}>
            <p className={classes.label}>Confirm passowrd : </p>
            <div className={classes.form__group}>
              <input type="password" className={classes.form__password} name='password' placeholder='Enter your password' value={userDetails.confirmPassword} onChange={() => { }} />
            </div>
          </div>
          
          {/* details submit */}
          <div className={classes.form__group}>
            <button className={classes.form__submit} type='submit'>Login</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default LoginVendorComp;