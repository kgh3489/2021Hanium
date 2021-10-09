import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import ProductList from '../product_list/product_list';
import styles from './main.module.css';

const Main = (props) => {
    
    // 유저정보 (로그인 기능 구현 시 작성)
    // const[userInfo, setUserInfo] = useState(historyState && historyState.userInfo);

    //상품 리스트 객체 배열
    const[products, setProducts] = useState([]);





    //상품들 가져오기(상품등록 DB구현 시 경로 재작성)
    const loadProducts=() => {
        return fetch(process.env.PUBLIC_URL + "/static/data_sample.json")
        .then(res => res.json())
    }

    //main컴포넌트가 마운트되면  userInfo에 해당하는(지역 등) products를 받아옴
    useEffect(() => {
        // if(!userInfo) { (로그인 기능 구현 시 작성. 의존성배열userInfo 추가해야함.
        //     return;
        // }
        loadProducts()
        .then(prod => setProducts(prod["products"]))

    },[]);


    
    
    return (
        <div className={styles.main}>
            <Header />
            <ProductList products={products}/>
            <Footer />
        </div>
    );

};

export default Main;