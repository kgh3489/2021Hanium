import styles from './product_register.module.css';
import { useHistory } from 'react-router-dom';


function ProductRegister() {
    
    const history = useHistory();
    
    const goToHome = () => {
        history.push({
            pathname: "/"
        })
    }

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.header_left}>
                    <button className={styles.gotoHome} onClick={goToHome}><i className="fas fa-arrow-left"></i></button>
                </div>
                <div className={styles.title}>
                    <h1 className={styles.title_h1}>상품 등록</h1>
                </div>
            </div>
            {/* Content */}
            <div className={styles.content}>
                {/* Photo */}
                <div className={styles.product_photo}>
                    <input type="file"/>
                    <button className={styles.photo_inputBtn}>사진 추가</button>
                </div>
                {/* Product Input */}
                <div className={styles.input_content}>
                    <input className={styles.productName} type="text" placeholder="상품 이름" />
                    <select name="" className={styles.bikeStyle}>
                        <option value="">--자전거 종류--</option>
                        <option value="">하이브리드</option>
                        <option value="">MTV</option>
                        <option value="">로드</option>
                    </select>
                    <input type="text" name="productPrice" placeholder="상품 가격" />
                    <input  type="text" placeholder="상품의 상세 설명을입력하세요" />
                </div>
                {/* Submit */}
                <div className={styles.product_submit}>
                    <button className={styles.submitBtn}>상품등록하기</button>
                </div>
                
            </div>
        </div>
        
        
    );
}

export default ProductRegister;
