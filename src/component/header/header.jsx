import React, { useState } from 'react';
import styles from './header.module.css';
import HeaderPop from './header_pop/header_pop';

const Header = (props) => {
    
    const[isMenuOpen,setMenuOpen] = useState({menuOpen:false});


    const toggleMenu = () => {
        setMenuOpen({menuOpen:!isMenuOpen.menuOpen});
    }



    return (
        <header className={styles.header}>
            {isMenuOpen.menuOpen && < HeaderPop toggleMenu={toggleMenu}/>}
            <div className={styles.header_left}>
                <button className={`${styles.btn} ${styles.barBtn}`} onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className={styles.title}>
                <h1 className={styles.title_h1}>Lend</h1>
            </div>
            <div className={styles.header_right}>
                <button className={`${styles.btn} ${styles.searchBtn}`}><i className="fas fa-search"></i></button>
                <button className={`${styles.btn} ${styles.filterBtn}`}><i className="fas fa-filter"></i></button>
            </div>
        </header>



    );


};

export default Header;