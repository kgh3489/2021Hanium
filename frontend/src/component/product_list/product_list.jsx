import React from 'react';
import styles from './product_list.module.css';
import Product from './product_item/product_item';
import { useHistory } from 'react-router-dom';



const ProductList = ({products}) => {
    const history = useHistory();
    const goToProductRegister = () => {
        history.push({
            pathname: "/product_register"
        })
    }


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

            {/* 상품등록페이지로 이동 버튼 */}
            <button onClick={goToProductRegister} className={styles.float}>
                <i className="fas fa-plus"></i>
            </button>
        </section>
    )


};

export default ProductList;