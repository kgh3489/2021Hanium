import React from 'react';
import styles from './myproduct.module.css';
import { useHistory } from 'react-router-dom';


const MyProdcut = () => {
    
    /* 컴포넌트 스위칭 */
    const history = useHistory();
    
    const goToHome = () => {
        history.push({
            pathname: "/"
        })
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button className={styles.gotoHome} onClick={goToHome}><i className="fas fa-arrow-left"></i></button>
            </div>
            <div className={styles.bikeB}>
                <h1> 빌린 자전거 </h1>
            </div>
            <div className={styles.bikeU}>
                <h1> 올린 자전거 </h1>
            </div>
        </div>

    );


};

export default MyProdcut;
// className={styles.}