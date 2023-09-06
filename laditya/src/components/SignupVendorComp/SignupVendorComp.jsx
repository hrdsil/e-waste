import React, { useState } from 'react';

import signupImage from '../../assets/signup.png';

// styles 
import classes from './SignupVendorComp.module.css';

const SignupVendorComp = () => {

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    profilePicture: '',
    address: {
      landmark: '',
      district: '',
      state: '',
      postalCode: ''
    },
    password: ''
  });

  return (
    <div className={classes.signup}>
      <div className={classes.header}>
        <h1 className={classes.heading}>Register as a Vendor</h1>
      </div>

      <div className={classes.formContainer}>
        <img className={classes.image} src={signupImage} alt="sign up" />
        <form className={classes.form} onSubmit={() => { }}>
          {/* user name */}
          <div className={classes.inputwrapper}>
            <p className={classes.label}>Name : </p>
            <div className={classes.form__group}>
              <input type="text" className={classes.form__name} name='user name' placeholder='Enter your name' value={userDetails.name} onChange={() => { }} />
            </div>
          </div>

          {/* user email */}
          <div className={classes.inputwrapper}>
            <p className={classes.label}>Email : </p>
            <div className={classes.form__group}>
              <input type="email" className={classes.form__email} name='user Email' placeholder='Enter your email' value={userDetails.email} onChange={() => { }} />
            </div>
          </div>


          {/* user phonenumber */}
          <div className={classes.inputwrapper}>
            <p className={classes.label}>Phone Number : </p>
            <div className={classes.form__group}>
              <input type="n" className={classes.form__phonenumber} name='user phone number' placeholder='Enter your phone number' value={userDetails.phoneNumber} onChange={() => { }} />
            </div>
          </div>

          
          {/* user gst number */}
          <div className={classes.inputwrapper}>
            <p className={classes.label}>GST Number : </p>
            <div className={classes.form__group}>
              <input type="n" className={classes.form__phonenumber} name='Enter GST number' placeholder='Enter your GST number' value={userDetails.gstNumber} onChange={() => { }} />
            </div>
          </div>

          {/* scrap image */}
          <div className={classes.inputwrapper}>
            <p className={classes.label}>Profile Image</p>
            <div className={classes.form__group}>
              <input className={classes.form__image} type="file" placeholder='upload profile picture' />
            </div>
          </div>

          <p style={{
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>Address : </p>

          {/* user landmark */}
          <div className={classes.inputwrapper}>
            <p className={classes.label}>Landmark : </p>
            <div className={classes.form__group}>
              <input type="text" className={classes.form__name} name='user landmark' placeholder='nearby landmark' value={userDetails.address.landmark} onChange={() => { }} />
            </div>
          </div>

          {/* user district */}
          <div className={classes.inputwrapper}>
            <p className={classes.label}>District : </p>
            <div className={classes.form__group}>
              <input type="text" className={classes.form__name} name='user district' placeholder='Enter your District' value={userDetails.address.district} onChange={() => { }} />
            </div>
          </div>

          {/* user state and postal code */}
          <div className={classes.inputwrapper}>
            <div className={classes.form__group}>
              <select className={classes.form__select} name="category" value={userDetails.category} placeholder='state' onChange={() => { }}>
                <option value="T.V">Assam</option>
                <option value="CPU">Arunachal</option>
                <option value="Mobile">Manipur</option>
                <option value="Monitor">Nagaland</option>
              </select>
            </div>
            <div className={classes.form__group}>
              <input type="number" className={classes.form__name} name='Postal Code' placeholder='PIN number' value={userDetails.address.postalCode} onChange={() => { }} />
            </div>
          </div>

          {/* user district */}
          <div className={classes.inputwrapper}>
            <p className={classes.label}>Password : </p>
            <div className={classes.form__group}>
              <input type="password" className={classes.form__name} name='password' placeholder='Enter your password' value={userDetails.address.district} onChange={() => { }} />
            </div>
          </div>


          {/* scarp category */}

          {/* details submit */}
          <div className={classes.form__group}>
            <button className={classes.form__submit} type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupVendorComp