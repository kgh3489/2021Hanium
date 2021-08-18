import React from 'react';
import styles from './product_list.module.css';
import Product from './product_item/product_item';
import { useHistory } from 'react-router-dom';



const ProductList = (props) => {
    const history = useHistory();
    const goToProductRegister = () => {
        history.push({
            pathname: "/product_register"
        })
    }


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
            <Product />
            <Product />
            <button className={styles.float} onClick={goToProductRegister}>
                <i className="fas fa-plus"></i>
            </button>
        </section>
    )


};

export default ProductList;