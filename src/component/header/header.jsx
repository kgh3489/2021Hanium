import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
    



    return (
        <header className={styles.header}>
            <div className={styles.header_left}>
                <button className={`${styles.btn} ${styles.barBtn}`}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className={styles.title}>
                <h1>빌려드림</h1>
            </div>
            <div className={styles.header_right}>
                <button className={`${styles.btn} ${styles.searchBtn}`}><i className="fas fa-search"></i></button>
                <button className={`${styles.btn} ${styles.filterBtn}`}><i className="fas fa-filter"></i></button>
            </div>
        </header>



    );


};

export default Header;