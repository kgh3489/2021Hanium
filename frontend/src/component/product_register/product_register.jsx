import KakaoAPI from './kakaoAPI';
import styles from './product_register.module.css';
import { useHistory } from 'react-router-dom';
import { useState, useRef } from 'react';

function ProductRegister() {
    // 라우터
    const history = useHistory();
    
    const goToHome = () => {
        history.push({
            pathname: "/"
        })
    }
    // 이미지
    const [imgBase64, setImgBase64] = useState([]);
    const [imgFile, setImgFile] = useState(null);
    
    const handleChangeFile = (event) => {
        console.log(event.target.files);
        setImgFile(event.target.files);
        //fd.append("file", event.target.files)
        setImgBase64([]);
        for (var i = 0; i < event.target.files.length; i++) {
            if (event.target.files[i]) {
                let reader = new FileReader();
                reader.readAsDataURL(event.target.files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
                // 파일 상태 업데이트
                reader.onloadend = () => {
                    // 2. 읽기가 완료되면 아래코드가 실행됩니다.
                    const base64 = reader.result;
                    console.log(base64)
                    if (base64) {
                        //  images.push(base64.toString())
                        var base64Sub = base64.toString()
                        setImgBase64(imgBase64 => [...imgBase64,base64Sub]);
                        //  setImgBase64(newObj); 
                        //파일 base64 상태 업데이트  
                        //console.log(images)
                    }
                }
            }
        }
    }

    // 이미지 인풋과 사진 추가 버튼 연결
    const inputImgRef = useRef();

    const btnChange = (e) => {
        e.preventDefault();
        inputImgRef.current.click();
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
                    <input ref={inputImgRef} onChange={handleChangeFile} style={{display: "none"}} 
                    type="file" className="imgInput" id="file" accept="image/*" multiple="multiple"/>
                    <button onClick={btnChange} className={styles.photo_inputBtn}>사진 추가</button>
                </div>
                {/* Product Input */}
                <div className={styles.inputContent}>
                    <input className={styles.productName} type="text" placeholder="상품 이름" />
                    <select name="bike" className={styles.bikeStyle}>
                        <option value="">-- 자전거 종류 --</option>
                        <option value="">하이브리드</option>
                        <option value="">MTV</option>
                        <option value="">로드</option>
                    </select>
                    <div className={styles.priceDiv}>
                        <input className={styles.productHourPrice} type="text" name="productHourPrice" placeholder="상품 가격 (1시간 당)" />
                        <input className={styles.productDayPrice} type="text" name="productDayPrice" placeholder="상품 가격 (1일 당)" />
                    </div>
                    <textarea className={styles.productDesc} type="text" placeholder="상품의 상세 설명을입력하세요" />
                    <KakaoAPI />
                </div>
                {/* Submit */}
                <div className={styles.product_submit}>
                    <button type="submit" /* onClick={productSubmit} */ className={styles.submitBtn}>상품등록하기</button>
                </div>
            </div>
        </div>
        
        
    );
}

export default ProductRegister;
