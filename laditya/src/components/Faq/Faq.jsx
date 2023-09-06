import React, { useState } from 'react';

// styles
import classes from './Faq.module.css';

import { ImConnection } from 'react-icons/im';
import { IoIosArrowDropdown } from 'react-icons/io';

const Faq = () => {


    const [faqData, setFaqData] = useState({
        email: '',
        message: ''
    });

    const Faqs = [
        {
            id: 1,
            title: "Lorem Ipsum is simply dummy text of the ",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        },
        {
            id: 2,
            title: "Lorem Ipsum is simply dummy text of the ",
            desc: ""
        },
        {
            id: 3,
            title: "Lorem Ipsum is simply dummy text of the ",
            desc: ""
        },
        {
            id: 4,
            title: "Lorem Ipsum is simply dummy text of the ",
            desc: ""
        },
    ]

    const [selectedId, setSelectedId] = useState(1);

    const handleClick = (id) => {
        setSelectedId(id);
    }


    return (
        <div className={classes.Container}>
            <p className={classes.header1}>FAQ`s</p>
            <p className={classes.header2}>have Questions we are here to help you</p>

            <div className={classes.faq}>

                <div className={classes.formContainer}>

                    <form className={classes.form} onSubmit={() => {}}>
                        <p className={classes.formHeader}>Still have Questions ?</p>
                        <div>
                            <ImConnection style={{
                                fontSize: '2rem',
                                color: 'green'
                            }} />
                            <p>Contact Us</p>
                        </div>
                        {/* sender email */}
                        <div className={classes.form__group}>
                            <input type="text" className={classes.form__email} name='scrap name' placeholder='scrap name' value={faqData.email} onChange={() => { }} />
                        </div>

                        {/* sender message */}
                        <div className={classes.form__group}>
                            <textarea type="text" className={classes.form__message} name='scrap name' placeholder='scrap name' value={faqData.message} onChange={() => { }} />
                        </div>

                        {/* details submit */}
                        <div className={classes.form__group}>
                            <button className={classes.form__submit} type='submit'>Send</button>
                        </div>
                    </form>
                </div>

                <div className={classes.questionsContainer}>
                    <div>
                        {Faqs.map((item) => (
                            <div
                                key={item.id}
                            >
                                <div className={classes.titleContainer}>
                                    <div>
                                        <p className={classes.title}>{item.title}</p>
                                    </div>
                                    <IoIosArrowDropdown style={{
                                        fontSize: '2rem',
                                        color: 'green'
                                    }}
                                    />
                                </div>

                                <div>
                                    <p>{item.desc}</p>
                                </div>

                                <hr style={{
                                    border: 'none',
                                    width: '95%',
                                    height: '2px',
                                    backgroundColor: 'green'
                                }} />

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Faq