import React from 'react';
import styles from './product_list.module.css';
import Product from './product_item/product_item'


const ProductList = (props) => {
        


    return (
        <section className={styles.product_list}>
            {/* <button className={styles.btn_regiprod}>버튼</button> */}
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <a href={""} className={styles.float}>
                <i className={styles.my_float}></i>
            </a>
        </section>
    )


};

export default ProductList;