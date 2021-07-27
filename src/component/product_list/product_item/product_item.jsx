import React from 'react';
import styles from './product_item.module.css';

const product_item = (props) => {
            


    return (
        <div className={styles.product_item}>
            <div className={styles.leftsec}>
                사진
            </div>
            <div className={styles.rightsec}>
                상세설명
            </div>
        </div>
    )


};

export default product_item;