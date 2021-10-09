import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import styles from './search.module.css';


const Search = (props) => {

    const history = useHistory();
    const goToMain = () => {
        history.push({
            pathname: "/"
        })
    }

    //검색어  (inputRef.current.value)
    const inputRef = useRef();



    return (
        <div className={styles.search}>
            <div className={styles.search_header}>
                <button className={styles.back} onClick={goToMain}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                <div className={styles.inputBox}>
                <input
                    ref={inputRef}
                    className={styles.search_input}
                    type="text"
                    placeholder="지역이나 자전거를 검색해주세요." />
                </div>
            </div>
        </div>
    )


};

export default Search;