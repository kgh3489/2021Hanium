import React from 'react';
import styles from './product_search.module.css';

export default function Product_search({toggleMenu}) {
    
    const onMenutoggle = (e) => {
        if(e.target.className === styles.containerSearch) {
            toggleMenu();
        };
    }

    return (
        <div className={styles.containerSearch} onClick={onMenutoggle}>
            <div className={styles.searchBox}>
                <input type="search" placeholder="검색어를 입력하세요." />
            </div>
        </div>
    );
    
}

// className={styles.}