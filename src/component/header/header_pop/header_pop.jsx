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
                    {/* 로그인 되었을 시 안나옴 */}
                    <div className={styles.beforeLogin}>
                        <span className={styles.message}>서비스를 이용하시려면 로그인 해주세요.</span>
                        <spqn className={styles.move_login_page}>로그인 또는 회원가입</spqn>
                    </div>
                    {/* 로그인 되었을 시 나옴 */}

            </div>  
        </div>
    )
};

export default HeaderPop;