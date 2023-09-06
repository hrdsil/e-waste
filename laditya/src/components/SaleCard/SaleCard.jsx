import React from 'react';

// styles
import classes from './SaleCard.module.css';

const scrapData = {
    name: 'scrap name',
    category: 'category',
    photo: 'photo'
};

const SaleCard = () => {

    return (
        <div className={classes.saleCard}>


            <form className={classes.form}>
                <h1>Sell Your Scraps</h1>
                {/* scrap name */}
                <div className={classes.form__group}>
                    <input type="text" className={classes.form__control} name='scrap name' placeholder='scrap name' value={scrapData.name} onChange={() => {}} />
                </div>

                {/* scarp category */}
                <div className={classes.form__group}>
                    <select className={classes.form__select} name="category" value={scrapData.category} onChange={() => {}}>
                        <option value="T.V">talevision</option>
                        <option value="CPU">CPU</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Monitor">Monitor</option>
                    </select>
                </div>

                {/* scrap image */}
                <div className={classes.form__group}>
                    <input className={classes.form__file} type="file" placeholder='upload scrap image' />
                </div>

                {/* details submit */}
                <div className={classes.form__group}>
                    <button className={classes.form__submit} type='submit'>Sell</button>
                </div>
            </form>

        </div>
    )
}

export default SaleCard