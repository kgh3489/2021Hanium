import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = (props) => {
    
    const history = useHistory();
    
    const goToHome = () => {
        history.push({
            pathname: "/"
        })
    }

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <button className={styles.gotoHome} onClick={goToHome}><i className="fas fa-arrow-left"></i></button>
            </div>
            <div className={styles.banner}>
                <span>로그인폼</span>
            </div>
        </div>
    )
};

export default Login;