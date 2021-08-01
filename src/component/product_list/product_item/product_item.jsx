import React from 'react';
import styles from './product_item.module.css';

const product_item = (props) => {
            


    return (
        <div className={styles.product_item}>
            <div className={styles.imagesec}>
                사진
            </div>
            <div className={styles.descsec}>
                상세설명상세설명상세설명상세설명상세설명상세설명
            </div>
        </div>
    )


};

export default product_item;