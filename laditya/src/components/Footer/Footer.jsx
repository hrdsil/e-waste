import React from 'react';
import {AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin} from 'react-icons/ai';
import {FiPhoneCall} from 'react-icons/fi';
import {LuMailCheck} from 'react-icons/lu';

import classes from './Footer.module.css'


const Footer = () => {
  return (
    <div className={classes.footer}>
        <div className={classes.container}>
            <div className={classes.aboutUs}>
                <h1 className={classes.header}>Scrapoics</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure sed quibusdam quas odit recusandae facere, incidunt voluptas eos facilis modi quis illo nostrum dignissimos perferendis dolore harum fuga nam. Amet!</p>

                <h1 className={classes.header}>Find us here online</h1>
                <div className={classes.socialIcon}>
                    <AiOutlineFacebook className={classes.icon} />
                    <AiOutlineTwitter className={classes.icon} />
                    <AiOutlineLinkedin className={classes.icon} />
                </div>
                <h1 className={classes.header}>Contact Us</h1>
                <div className={classes.contactContainer}>
                    <FiPhoneCall className={classes.icon} />
                    <p>+91-6002379821</p>
                </div>
                <div className={classes.contactContainer}>
                    <LuMailCheck className={classes.icon} />
                    <p>scraponics@gmail.com</p>
                </div>
            </div>
            <div className={classes.support}>
                <h1 className={classes.header}>Support</h1>
                <p>Help</p>
                <p>Privacy</p>
                <p>More Knowledge</p>
            </div>
            <div className={classes.company}>
                <h1 className={classes.header}>Company</h1>
                <p>About us</p>
                <p>Terms of Use</p>
                <p>Our Partners</p>
            </div>
            <div className={classes.developers}>
                <h1 className={classes.header}>Developers</h1>
                <p>Docs</p>
                <p>Integrations</p>
                <p>API Reference</p>
            </div>
        </div>
        <div className={classes.copyright}>
            <h1 className={classes.header}>Copyright Protected @CDAC 2023. All Right Reserved</h1>
        </div>
    </div>
  )
}

export default Footer;