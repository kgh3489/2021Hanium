import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => {

    return (
        <footer className={styles.footer}>
            <ul className={styles.footerMenu}>
                <li>
                    <button className={`${styles.footerBtn} ${styles.mapBtn}`}>
                        <i className="fas fa-map-marked-alt"></i>
                        <span className={styles.btnName}>위치 등록</span>
                    </button>
                    
                </li>
                <li>
                    <button className={`${styles.footerBtn} ${styles.mapBtn}`}>
                        <i className="fas fa-plus"></i>
                        <span className={styles.btnName}>상품 등록</span>
                    </button>
                </li>
                <li>
                    <button className={`${styles.footerBtn} ${styles.mapBtn}`}>
                        <i className="fas fa-home"></i>
                        <span className={styles.btnName}>홈</span>
                    </button>
                </li>
                <li>
                    <button className={`${styles.footerBtn} ${styles.mapBtn}`}>
                        <i className="fas fa-comments"></i>
                        <span className={styles.btnName}>채팅</span>
                    </button>
                </li>
                <li>
                    <button className={`${styles.footerBtn} ${styles.mapBtn}`}>
                        <i className="fas fa-user"></i>
                        <span className={styles.btnName}>내 프로필</span>
                    </button>
                </li>                
            </ul>
        </footer>
    )

};

export default Footer;