import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './product_detail.module.css';

const ProductDetail = (props) => {

    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }


    const[product,setProduct] = useState({});

    useEffect(() => {

        const productId = parseInt(window.location.pathname.substr(window.location.pathname.lastIndexOf('/')+1));
        fetch(process.env.PUBLIC_URL + "/static/data_sample.json") // /api/search/{productId} 로 get요청 해줘야함.
        .then(res => res.json())
        .then(data => data.products)
        .then(products => {
            const product = products.filter(item => { //서버에서 처리해줘야함.
                if(item.id === productId){
                    return item;
                }
            })
            setProduct(product[0]);
        })
        
    },[])

    return (
        <div className={styles.container}>
            <section className={styles.details}>
                <div className={styles.imgBox}>
                <button onClick={goBack} className={styles.goBackBtn}><i className="fas fa-arrow-left"></i></button>
                    <img 
                        className={styles.product_img}
                        src="https://res.cloudinary.com/diuhf2vfm/image/upload/v1634639730/uzmsub1jt4pzgaemc8jl.jpg" 
                        alt="" 
                    />
                </div>
                <header className={styles.userBox}>
                    <span>등록자정보 &nbsp;</span>
                    <span>닉넴 : {product.member}</span>
                </header>
                <section className={styles.ProductInfo}>
                    <div className={styles.product_title}>
                        <span>{product.product_name}</span>
                    </div>
                    <div className={styles.location}>
                        <span>{product.gu}</span>
                    </div>
                    <div className={styles.product_description}>
                        <span>{product.product_description}</span>
                    </div>
                </section>
                <div className={styles.chatBox}>
                    <button className={styles.chatBtn}>채팅으로 시작</button>
                </div>
            </section>
        </div>

    );


};

export default ProductDetail;