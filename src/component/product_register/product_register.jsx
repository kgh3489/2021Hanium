import styles from './product_register.module.css';
import { useHistory } from 'react-router-dom';


function ProductRegister() {
    
    const history = useHistory();
    
    const goToHome = () => {
        history.push({
            pathname: "/2021Hanium"
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.header_left}>
                    <button className={styles.gotoHome} onClick={goToHome}><i className="fas fa-arrow-left"></i></button>
                </div>
                <div className={styles.title}>
                    <h1 className={styles.title_h1}>상품 등록</h1>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.product_photo}>
                    <button className={styles.photo_input}>123</button>
                </div>
                <div className={styles.input_content}>
                    <input type="text" name="username" placeholder="상품 이름" />
                    <input type="text" name="username" placeholder="자전거 종류" />
                </div>
                <div className={styles.product_submit}>
                    <button className={styles.submitBtn}>상품등록하기</button>
                </div>
               
            </div>
        </div>
        
        
    );
}

export default ProductRegister;
