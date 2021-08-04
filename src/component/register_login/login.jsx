import React from 'react';
import styles from './login.module.css';
import logo from 'public/images/logo.png';

const Login = (props) => {
            


    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.form}>
                <div className={styles.form_group}>
                    <label htmlFor="username">아이디</label>
                    <input type="text" name="username" placeholder="ID" />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="password">패스워드</label>
                    <input type="password" name="password" placeholder="Password" />
                </div>
            </div>
            <div className={styles.btns}>
                <button className={styles.login_btn}>로그인</button>
                <button className={styles.register_btn}>회원가입</button>
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