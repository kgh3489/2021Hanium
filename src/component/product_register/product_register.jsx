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
        <div className={styles.header}>
            <div className={styles.header_left}>
                <button className={styles.gotoHome} onClick={goToHome}><i className="fas fa-arrow-left"></i></button>
            </div>
            <div className={styles.title}>
                <h1 className={styles.title_h1}>Lend</h1>
            </div>
        </div>
    );
}

export default ProductRegister;
