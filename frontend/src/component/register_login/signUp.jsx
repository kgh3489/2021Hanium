import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './signUp.module.css';

const SignUp = (props) => {
    
    
    const history = useHistory();
    const[signUpdata, setSignUpData] = useState('');

    const goToLogin = () => {
        history.push({
            pathname: "/login"
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();



        alert(`회원가입 완료(연습)!
                id: ${signUpdata.id}
                pw: ${signUpdata.pw}
                닉네임: ${signUpdata.nickname}
                전화번호: ${signUpdata.phone}
            `)
            console.log(signUpdata);
        goToLogin();
    }


    const handleChange = (e) => {
        setSignUpData({
            ...signUpdata,
            [e.target.name]: e.target.value,

        })
    }



    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
            <div>
            <label>ID :
            <input className={styles.input} type="text" name="id" placeholder='id' value={signUpdata.id || ""} onChange={handleChange}></input>
            </label>
            </div>

            <div>
            <label>PW :
            <input className={styles.input} type="text" name="pw" placeholder='pw' value={signUpdata.pw || ""} onChange={handleChange}></input>
            </label>
            </div>

            <div>
            <label>닉네임 :
            <input className={styles.input} type="text" name="nickname" placeholder='닉네임' value={signUpdata.nickname || ""} onChange={handleChange}></input>
            </label>
            </div>

            <div>
            <label>전화번호 :
            <input className={styles.input} type="text" name="phone" placeholder='전화번호' value={signUpdata.phone || ""} onChange={handleChange}></input>
            </label>
            </div>


            <input type="submit" value="회원가입"></input>
            </form>
        </div>
    )
};

export default SignUp;