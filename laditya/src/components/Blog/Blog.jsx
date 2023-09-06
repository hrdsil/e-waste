import React from 'react';

import author from '../../assets/placeholder.jpg';
import blogImage from '../../assets/homecard.png';


// styles 
import classes from './Blog.module.css';

const Blog = () => {
    return (
        <>
            <h1 style={{
                textAlign: 'center'
            }}>Latest News</h1>
            <div className={classes.blog}>
                <div className={classes.padding__container}>
                    <div className={classes.flex__container}>
                        <div className={classes.inner__margin__box}>
                            <div className={classes.grid__container}>

                                <section className={classes.section__container}>
                                    <div className={classes.level__1}>
                                        <div className={classes.level__2}>


                                            {/* blog card */}
                                            <div className={classes.card__container}>
                                                <div className={classes.card__margin}>
                                                    <div className={classes.card__flex}>
                                                        <div className={classes.card__content}>
                                                            <div className={classes.card__heading}>
                                                                <h1 style={
                                                                    {
                                                                        color: 'black'
                                                                    }
                                                                }>hellow world! helllow world!</h1>
                                                            </div>
                                                            <div className={classes.card__desc}>
                                                                <h4 style={{
                                                                    color: '#ccc',
                                                                    fontWeight: 'lighter'
                                                                }}>Electronic Waste (E-Waste) means electrical and electronic equipment, whole or in part discarded as waste by the consumer or bulk consumer as well as rejects from manufacturing, refurbishment and repair processes...</h4>
                                                            </div>
                                                            <div style={{
                                                                display: 'flex',
                                                                flexDirection: 'row',
                                                                justifyContent: 'flex-start',
                                                                alignItems: 'center',
                                                                gap: '1rem'
                                                            }}>
                                                                <img style={{
                                                                    width: '30px',
                                                                    height: '30px'
                                                                }} src={author} alt="" />
                                                                <h3>john wick</h3>
                                                            </div>

                                                        </div>
                                                        <img style={{
                                                            width: '150px',
                                                            height: '150px'
                                                        }} src={blogImage} alt="" />
                                                    </div>
                                                </div>






                                            </div>
                                            <div className={classes.card__container}>
                                                <div className={classes.card__margin}>
                                                    <div className={classes.card__flex}>
                                                        <div className={classes.card__content}>
                                                            <div className={classes.card__heading}>
                                                                <h1 style={
                                                                    {
                                                                        color: 'black'
                                                                    }
                                                                }>hellow world! helllow world!</h1>
                                                            </div>
                                                            <div className={classes.card__desc}>
                                                                <h4 style={{
                                                                    color: '#ccc',
                                                                    fontWeight: 'lighter'
                                                                }}>Electronic Waste (E-Waste) means electrical and electronic equipment, whole or in part discarded as waste by the consumer or bulk consumer as well as rejects from manufacturing, refurbishment and repair processes...</h4>
                                                            </div>
                                                            <div style={{
                                                                display: 'flex',
                                                                flexDirection: 'row',
                                                                justifyContent: 'flex-start',
                                                                alignItems: 'center',
                                                                gap: '1rem'
                                                            }}>
                                                                <img style={{
                                                                    width: '30px',
                                                                    height: '30px'
                                                                }} src={author} alt="" />
                                                                <h3>john wick</h3>
                                                            </div>

                                                        </div>
                                                        <img style={{
                                                            width: '150px',
                                                            height: '150px'
                                                        }} src={blogImage} alt="" />
                                                    </div>
                                                </div>






                                            </div>
                                            <div className={classes.card__container}>
                                                <div className={classes.card__margin}>
                                                    <div className={classes.card__flex}>
                                                        <div className={classes.card__content}>
                                                            <div className={classes.card__heading}>
                                                                <h1 style={
                                                                    {
                                                                        color: 'black'
                                                                    }
                                                                }>hellow world! helllow world!</h1>
                                                            </div>
                                                            <div className={classes.card__desc}>
                                                                <h4 style={{
                                                                    color: '#ccc',
                                                                    fontWeight: 'lighter'
                                                                }}>Electronic Waste (E-Waste) means electrical and electronic equipment, whole or in part discarded as waste by the consumer or bulk consumer as well as rejects from manufacturing, refurbishment and repair processes...</h4>
                                                            </div>
                                                            <img style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }} src={author} alt="" />

                                                        </div>
                                                        <img style={{
                                                            width: '150px',
                                                            height: '150px'
                                                        }} src={blogImage} alt="" />
                                                    </div>
                                                </div>






                                            </div>
                                            <div className={classes.card__container}>
                                                <div className={classes.card__margin}>
                                                    <div className={classes.card__flex}>
                                                        <div className={classes.card__content}>
                                                            <div className={classes.card__heading}>
                                                                <h1 style={
                                                                    {
                                                                        color: 'black'
                                                                    }
                                                                }>hellow world! helllow world!</h1>
                                                            </div>
                                                            <div className={classes.card__desc}>
                                                                <h4 style={{
                                                                    color: '#ccc',
                                                                    fontWeight: 'lighter'
                                                                }}>Electronic Waste (E-Waste) means electrical and electronic equipment, whole or in part discarded as waste by the consumer or bulk consumer as well as rejects from manufacturing, refurbishment and repair processes...</h4>
                                                            </div>
                                                            <img style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }} src={author} alt="" />

                                                        </div>
                                                        <img style={{
                                                            width: '150px',
                                                            height: '150px'
                                                        }} src={blogImage} alt="" />
                                                    </div>
                                                </div>






                                            </div>
                                            <div className={classes.card__container}>
                                                <div className={classes.card__margin}>
                                                    <div className={classes.card__flex}>
                                                        <div className={classes.card__content}>
                                                            <div className={classes.card__heading}>
                                                                <h1 style={
                                                                    {
                                                                        color: 'black'
                                                                    }
                                                                }>hellow world! helllow world!</h1>
                                                            </div>
                                                            <div className={classes.card__desc}>
                                                                <h4 style={{
                                                                    color: '#ccc',
                                                                    fontWeight: 'lighter'
                                                                }}>Electronic Waste (E-Waste) means electrical and electronic equipment, whole or in part discarded as waste by the consumer or bulk consumer as well as rejects from manufacturing, refurbishment and repair processes...</h4>
                                                            </div>
                                                            <img style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }} src={author} alt="" />

                                                        </div>
                                                        <img style={{
                                                            width: '150px',
                                                            height: '150px'
                                                        }} src={blogImage} alt="" />
                                                    </div>
                                                </div>






                                            </div>
                                            <div className={classes.card__container}>
                                                <div className={classes.card__margin}>
                                                    <div className={classes.card__flex}>
                                                        <div className={classes.card__content}>
                                                            <div className={classes.card__heading}>
                                                                <h1 style={
                                                                    {
                                                                        color: 'black'
                                                                    }
                                                                }>hellow world! helllow world!</h1>
                                                            </div>
                                                            <div className={classes.card__desc}>
                                                                <h4 style={{
                                                                    color: '#ccc',
                                                                    fontWeight: 'lighter'
                                                                }}>Electronic Waste (E-Waste) means electrical and electronic equipment, whole or in part discarded as waste by the consumer or bulk consumer as well as rejects from manufacturing, refurbishment and repair processes...</h4>
                                                            </div>
                                                            <img style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }} src={author} alt="" />

                                                        </div>
                                                        <img style={{
                                                            width: '150px',
                                                            height: '150px'
                                                        }} src={blogImage} alt="" />
                                                    </div>
                                                </div>






                                            </div>
                                            <div className={classes.card__container}>
                                                <div className={classes.card__margin}>
                                                    <div className={classes.card__flex}>
                                                        <div className={classes.card__content}>
                                                            <div className={classes.card__heading}>
                                                                <h1 style={
                                                                    {
                                                                        color: 'black'
                                                                    }
                                                                }>hellow world! helllow world!</h1>
                                                            </div>
                                                            <div className={classes.card__desc}>
                                                                <h4 style={{
                                                                    color: '#ccc',
                                                                    fontWeight: 'lighter'
                                                                }}>Electronic Waste (E-Waste) means electrical and electronic equipment, whole or in part discarded as waste by the consumer or bulk consumer as well as rejects from manufacturing, refurbishment and repair processes...</h4>
                                                            </div>
                                                            <img style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }} src={author} alt="" />

                                                        </div>
                                                        <img style={{
                                                            width: '150px',
                                                            height: '150px'
                                                        }} src={blogImage} alt="" />
                                                    </div>
                                                </div>






                                            </div>
                                            <div className={classes.card__container}>
                                                <div className={classes.card__margin}>
                                                    <div className={classes.card__flex}>
                                                        <div className={classes.card__content}>
                                                            <div className={classes.card__heading}>
                                                                <h1 style={
                                                                    {
                                                                        color: 'black'
                                                                    }
                                                                }>hellow world! helllow world!</h1>
                                                            </div>
                                                            <div className={classes.card__desc}>
                                                                <h4 style={{
                                                                    color: '#ccc',
                                                                    fontWeight: 'lighter'
                                                                }}>Electronic Waste (E-Waste) means electrical and electronic equipment, whole or in part discarded as waste by the consumer or bulk consumer as well as rejects from manufacturing, refurbishment and repair processes...</h4>
                                                            </div>
                                                            <img style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }} src={author} alt="" />

                                                        </div>
                                                        <img style={{
                                                            width: '150px',
                                                            height: '150px'
                                                        }} src={blogImage} alt="" />
                                                    </div>
                                                </div>






                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <aside className={classes.aside__container}>
                                    <div className={classes.sticky__container}>
                                        {/* <h1 style={
                                            {
                                                margin: '0',
                                                padding: '0'
                                            }
                                        }>sticky__container</h1> */}
                                        <h1 className={classes.heading}>Search By Categories</h1>
                                        <div className={classes.categories}>
                                            <p>Lorem.</p>
                                            <p>Lorem, ipsum dolor.</p>
                                            <p>Lorem, ipsum.</p>
                                            <p>Lorem.</p>
                                            <p>Lorem. Lorem</p>
                                            <p>Lorem.</p>
                                            <p>Lorem, ipsum dolor.</p>
                                            <p>Lorem, ipsum.</p>
                                            <p>Lorem.</p>
                                            <p>Lorem. Lorem</p>
                                        </div>
                                    </div>
                                </aside>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Blog;