import React from 'react';
import styles from './header_pop.module.css';

const HeaderPop = ({toggleMenu}) => {

    const onMenutoggle=(e) => {
        if(e.target.className === styles.left_pop) {
            toggleMenu();
        };
    }

    return (

        <div className={styles.left_pop} onClick={onMenutoggle}>
            <div className={styles.pop_menu}>
                <>로그인</>
            </div>  
        </div>
    )
};

export default HeaderPop;