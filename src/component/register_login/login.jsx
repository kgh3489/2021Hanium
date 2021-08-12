import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = (props) => {
    
    /* 컴포넌트 스위칭 */
    const history = useHistory();
    
    const goToHome = () => {
        history.push({
            pathname: "/2021Hanium"
        })
    }

    /* 네이버 아이디 로그인 */
    const {naver} = window;

    const Naver = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: aLUPHGNIXs0WoC2mVxqX,
            callbackUrl: "http://localhost:3000/login",
            isPopup: false,
            loginButton: {
                color: 'green',
                type: 3,
                height: '50'
            }
        });
        naverLogin.init();
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button className={styles.gotoHome} onClick={goToHome}><i className="fas fa-arrow-left"></i></button>
            </div>
            <div className={styles.banner}>
                <img className={styles.logo} src="2021Hanium/images/logo.png" alt="logo" />
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