import React from 'react';
import styles from './product_list.module.css';
import Product from './product_item/product_item'


const ProductList = (props) => {
        


    return (
        <section className={styles.product_list}>
            <Product />
        </section>
    )


};

export default ProductList;