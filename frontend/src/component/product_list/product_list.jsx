import React, { useRef, useState, useEffect } from 'react';
import styles from './product_list.module.css';
import Product from './product_item/product_item';
import axios from 'axios';

const ProductList = ({products}) => {

    

    //필터 기능
    const filterRef = useRef();

    const filterHandler = () => {
        filterRef.current.style.display = 'block'
    }

    const filterMTV = () => {
        
        filterRef.current.style.display = 'none'
    }
    const filterHybrid = () => {

        filterRef.current.style.display = 'none'
    }
    const filterRoad = () => {

        filterRef.current.style.display = 'none'
    }


    return (
        <section className={styles.product_list}>
            <button onClick={filterHandler} className={styles.filterBtn}><i className="fas fa-filter"></i></button>
            <div ref={filterRef} className={styles.filterBox}>
                <div className={styles.bikeBox}>
                    <button onClick={filterMTV} className={styles.bikeBtn}>MTV</button>
                    <button onClick={filterHybrid} className={styles.bikeBtn}>하이브리드</button>
                    <button onClick={filterRoad} className={styles.bikeBtn}>로드바이크</button>
                </div>
            </div>
            {/* <button className={styles.btn_regiprod}>버튼</button> */}
            {
                products.map(product => 
                    <Product 
                        key={product.id}
                        product={product}
                    />
                )
            }
        </section>
    )


};

export default ProductList;

