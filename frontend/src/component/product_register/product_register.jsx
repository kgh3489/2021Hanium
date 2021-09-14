import KakaoAPI from './kakaoAPI';
import styles from './product_register.module.css';
import { useHistory } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function ProductRegister() {
    // 라우터
    const history = useHistory();
    
    const goToHome = () => {
        history.push({
            pathname: "/"
        })
    }
    // 이미지
    const [imgBase64, setImgBase64] = useState([]); // 미리보기
    const [imgFile, setImgFile] = useState(null); // 사진 파일
    
    const handleChangeFile = (e) => {
        console.log(e.target.files);
        setImgFile(e.target.files);
        for(var i = 0; i < e.target.files.length; i++) {
            let reader = new FileReader();
            // 1. 파일을 읽어 버퍼에 저장
            reader.readAsDataURL(e.target.files[i]);

            //파일 상태 업데이트
            reader.onloadend = () => {
                // 2. 읽기가 완료되면 아래 코드 실행
                const base64 = reader.result;
                console.log(base64.base64)
                if (base64) {
                    var base64Sub = base64.toString();
                    setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
                }
            }
            console.log(imgBase64);
            console.log(imgFile);
        }
    }

    

    // 이미지 인풋과 사진 추가 버튼 연결
    const inputImgRef = useRef();

    const btnChange = (e) => {
        e.preventDefault();
        inputImgRef.current.click();
    }
    // 주소 받아오기
    const [textValue, setTextValue] = useState();

    const getTextValue = (text) => {
        setTextValue(text);
    }
    // 상품
    const[productData, setProductData] = useState({
        "productPic": { imgFile },
        "productName": '',
        "productBike": '',
        "productHourPrice": '',
        "productDayPrice": '',
        "productDesc": '',
        "productPlace": { textValue },
    });

    /* // 전송
    const WriteBoard = async () => {
    const fd = new FormData();
    Object.values(imgFile).forEach((file) => fd.append("file", file));

    // fd.append("comment", comment);

    await axios
        .post('http://http://127.0.0.1:8000//product_register', fd, {
            headers: {
                "Content-Type": `multipart/form-data; `
            }
        })
        .then((response) => {
            if (response.data) {
                console.log(response.data)
                history.push("/test1");
            }
        })
        .catch((error) => {
            // 예외 처리
        })
    } */




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
            <form className={styles.content}>
                {/* Photo */}
                <div className={styles.product_photo}>
                    <input ref={inputImgRef}  style={{display: "none"}} onChange={handleChangeFile}
                    type="file" className="imgInput" name="productPic" accept="image/*" multiple="multiple"/>
                    <button onClick={btnChange} className={styles.photo_inputBtn}>사진 추가</button>
                </div>
                {imgBase64.map((item) => {
                    return(
                        <img
                        key='id1'
                        className=""
                        src={item}
                        alt="First slide" // eslint-disable-next-line
                        style={{width:"50%", height:"350px", display:"flex",  flexDirection: "row"}}
                        />
                        
                    )
                })}
                {/* Product Input */}
                <div className={styles.inputContent}>
                    <input className={styles.productName} name="productName" type="text" placeholder="상품 이름" />
                    <select name="productBike" className={styles.bikeStyle}>
                        <option value="">-- 자전거 종류 --</option>
                        <option value="">하이브리드</option>
                        <option value="">MTV</option>
                        <option value="">로드</option>
                    </select>
                    <div className={styles.priceDiv}>
                        <input className={styles.productHourPrice} type="text" name="productHourPrice" placeholder="상품 가격 (1시간 당)" />
                        <input className={styles.productDayPrice} type="text" name="productDayPrice" placeholder="상품 가격 (1일 당)" />
                    </div>
                    <textarea className={styles.productDesc} name="productDesc" type="text" placeholder="상품의 상세 설명을입력하세요" />
                    <KakaoAPI getTextValue={getTextValue} />
                    <span>당신의 주소는 { textValue }</span>
                </div>
                {/* Submit */}
                <div className={styles.product_submit}>
                    <button type="submit" className={styles.submitBtn}>상품등록하기</button>
                </div>
            </form>
        </div>
        
        
    );
}
export default ProductRegister;

