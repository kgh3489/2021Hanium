import React, { useRef, useState } from 'react';
import styles from './product_list.module.css';
import Product from './product_item/product_item';


const ProductList = ({products}) => {
    
    /* const [filterDisplay, setFilterDisplay] = useState('none');

    const filterHandler = () => {
        if (filterDisplay === 'none') {
            setFilterDisplay('display');
            console.log(filterDisplay);
        } else {
            setFilterDisplay('none');
            console.log(filterDisplay);
        }
        
    } */

    const filterRef = useRef();

    const filterHandler = () => {
        filterRef.current.style.display = 'block'
    }

    const bikeBtnHandler = () => {
        filterRef.current.style.display = 'none'
    }


    return (
        <section className={styles.product_list}>
            <button onClick={filterHandler} className={styles.filterBtn}><i className="fas fa-filter"></i></button>
            <div ref={filterRef} className={styles.filterBox}>
                <div className={styles.bikeBox}>
                    <button onClick={bikeBtnHandler} className={styles.bikeBtn}>MTV</button>
                    <button onClick={bikeBtnHandler} className={styles.bikeBtn}>하이브리드</button>
                    <button onClick={bikeBtnHandler} className={styles.bikeBtn}>로드바이크</button>
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

