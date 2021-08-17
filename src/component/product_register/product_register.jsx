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
        <div className={styles.app}>
            <button onClick={goToHome}> 홈으로가기 </button>
        </div>
    );
}

export default ProductRegister;
