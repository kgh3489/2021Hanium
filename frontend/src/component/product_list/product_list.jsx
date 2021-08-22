import React, { useEffect, useState } from 'react';
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
    
    const[products, setProducts] = useState([]);
    
    const loadProducts=() => {
        return fetch("/data/data_sample.json")
        .then(res => res.json())
    }

    useEffect(() => {
        loadProducts()
        .then(prod => setProducts(prod["products"]))
    }, [])


    return (
        <section className={styles.product_list}>
            {/* <button className={styles.btn_regiprod}>버튼</button> */}
            {
                products.map(product => 
                    <Product 
                        key={product.id}
                        product={product}
                    />
                )
            }
            <button onClick={goToProductRegister} className={styles.float}>
                <i className="fas fa-plus"></i>
            </button>
        </section>
    )


};

export default ProductList;