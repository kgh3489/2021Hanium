import React from 'react';
import { useHistory } from 'react-router-dom';


const MyProfile = () => {
    
    /* 컴포넌트 스위칭 */
    const history = useHistory();
    
    const goToHome = () => {
        history.push({
            pathname: "/"
        })
    }
    
    return (
        <div>
            <span>내 프로필</span>
            <button onClick={ goToHome }>홈으로</button>

        </div>

    );


};

export default MyProfile;