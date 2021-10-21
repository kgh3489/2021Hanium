import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import ProductList from '../product_list/product_list';
import styles from './main.module.css';
import axios from 'axios';


const Main = (props) => {
    
    // 유저정보 (로그인 기능 구현 시 작성)
    // const[userInfo, setUserInfo] = useState(historyState && historyState.userInfo);

    

    const history = useHistory();
    const goToProductRegister = () => {
        history.push({
            pathname: "/product_register"
        })
    }




    //상품 리스트 객체 배열
    const[products, setProducts] = useState([]);
    //상품들 가져오기(상품등록 DB구현 시 경로 재작성)
    const loadProducts=() => {
        axios.get('/product/')
            .then((Response) => setProducts(Response.data))
            .catch((Error) => {console.log(Error)})
    }

    //main컴포넌트가 마운트되면  userInfo에 해당하는(지역 등) products를 받아옴
    useEffect(() => {
        // if(!userInfo) { (로그인 기능 구현 시 작성. 의존성배열userInfo 추가해야함.
        //     return;
        // }
        loadProducts()
    },[]);

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
        <div className={styles.main}>
            <Header />
            <button onClick={filterHandler} className={styles.filterBtn}><i className="fas fa-filter"></i></button>
            <div ref={filterRef} className={styles.filterBox}>
                <div className={styles.bikeBox}>
                    <button onClick={filterMTV} className={styles.bikeBtn}>MTV</button>
                    <button onClick={filterHybrid} className={styles.bikeBtn}>하이브리드</button>
                    <button onClick={filterRoad} className={styles.bikeBtn}>로드바이크</button>
                </div>
            </div>
            <ProductList products={products}/>
            <Footer />

            {/* 상품등록페이지로 이동 버튼 */}
            <button onClick={goToProductRegister} className={styles.float}>
                <i className="fas fa-plus"></i>
            </button>
        </div>
    );

};

export default Main;