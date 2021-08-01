import React from 'react';
import styles from './product_item.module.css';

const Product_item = (props) => {
            


    return (
        <div className={styles.product_item}>
            <div className={styles.imagesec}>
                <i className="fas fa-bicycle"></i>
            </div>
            <div className={styles.descsec}>
                <div className={styles.product_title}>
                    <span>자전거 이름</span>
                </div>
                <div className={styles.product_desc}>
                    <span>이곳은 상품의 상세설명란입니다. 이곳은 상품의 상세설명란입니다.이곳은 상품의 상세설명란입니다.</span>
                </div>
                <div className={styles.product_price}>
                    <span>판매자 / 100,000</span>
                </div>
            </div>
        </div>
    )
};

export default Product_item;