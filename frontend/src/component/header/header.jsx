import React, { useState } from 'react';
import styles from './header.module.css';
import HeaderPop from './header_pop/header_pop';
import Product_search from './product_search/product_search';

const Header = (props) => {
    
    const[isMenuOpenM,setMenuOpenM] = useState({menuOpenM:false});
    const[isMenuOpenS,setMenuOpenS] = useState({menuOpenS:false});


    const toggleMenuLogin = () => {
        setMenuOpenM({menuOpenM:!isMenuOpenM.menuOpenM});
    }

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
                {isMenuOpenS.menuOpenS && < Product_search toggleMenu={toggleMenuSearch}/>}
                <button onClick={toggleMenuSearch} className={`${styles.btn} ${styles.searchBtn}`}><i className="fas fa-search"></i></button>
                <button className={`${styles.btn} ${styles.filterBtn}`}><i className="fas fa-filter"></i></button>
            </div>
        </header>



    );


};

export default Header;