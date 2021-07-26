import React from 'react';
import styles from './header_pop.module.css';

const Header_pop = ({toggleMenu}) => {

    const onMenutoggle=(e) => {
        if(e.target.className === "header_pop_left_pop__1ha29"){
            toggleMenu();
        }
    }

    return (

        <div className={styles.left_pop} onClick={onMenutoggle}>
            <div className={styles.pop_menu}>
                <>로그인</>
            </div>  
        </div>
    )
};

export default Header_pop;