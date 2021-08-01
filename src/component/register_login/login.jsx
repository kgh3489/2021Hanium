import React from 'react';
import styles from './login.module.css';

const Login = (props) => {
            


    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <span>빌려드림</span>
            </div>
            <div className={styles.login_input}>
                <span>아이디</span>
                <span>패스워드</span>
            </div>
            <div className={styles.login_btn}>
                회원가입 로그인
            </div>
            <div className={styles.login_sns}>
                <span>네이버</span>
                <span>카카오</span>
                <span>페이스북</span>
                <span>구글</span>
            </div>
        </div>
    )
};

export default Login;