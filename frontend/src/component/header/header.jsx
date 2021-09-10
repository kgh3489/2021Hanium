import React, { useState } from 'react';
import styles from './header.module.css';
import HeaderPop from './header_pop/header_pop';
import ProductSearch from './product_search/product_search';

const Header = (props) => {
    
    // 토글메뉴 
    const[isMenuOpenM,setMenuOpenM] = useState({menuOpenM:false});
    const[isMenuOpenS,setMenuOpenS] = useState({menuOpenS:false});

    // 로그인
    const toggleMenuLogin = () => {
        setMenuOpenM({menuOpenM:!isMenuOpenM.menuOpenM});
    }
    // 검색창
    const toggleMenuSearch = () => {
        setMenuOpenS({menuOpenS:!isMenuOpenS.menuOpenS});
    }



    return (
        <header className={styles.header}>
            {isMenuOpenM.menuOpenM && < HeaderPop toggleMenu={toggleMenuLogin}/>}
            
            <div className={styles.header_left}>
                <button className={`${styles.btn} ${styles.barBtn}`} onClick={toggleMenuLogin}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className={styles.title}>
                <h1 className={styles.title_h1}>Lend</h1>
            </div>
            <div className={styles.header_right}>
                {isMenuOpenS.menuOpenS && < ProductSearch toggleMenu={toggleMenuSearch}/>}
                <button onClick={toggleMenuSearch} className={`${styles.btn} ${styles.searchBtn}`}><i className="fas fa-search"></i></button>
                <button className={`${styles.btn} ${styles.filterBtn}`}><i className="fas fa-filter"></i></button>
            </div>
        </header>



    );


};

export default Header;