import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './product_detail.module.css';
import CommentList from '../comment/comment_list';


const ProductDetail = (props) => {

    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }


    const[product,setProduct] = useState({
        "product_id": '',
        "title": '',
        "location": '',
        "detail": '',
        "imgURL": '',
        "price_hour": '',
        "price_day": '',
        "type": '',
        "userId": '',
        "postUserNickname": '',
    });

    const[comment,setComment] = useState('');


    const handleChange = (e) => {
        setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //댓글 axios
    }

    const handleDelete = (e) => {
        axios({
            method: 'delete',
            url: `/product/${history.location.props}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            }
        })
        .then( res => {
            console.log(res);
            setProduct({
                "product_id": res.data.id,
                "product_name": res.data.product_name,
                "product_location": res.data.product_location,
                "product_detail": res.data.product_detail,
                "product_img": res.data.product_img,
                "product_lend_h": res.data.product_lend_h,
                "product_lend_d": res.data.product_lend_d,
                "product_type": res.data.product_type,
                //"userId": res.data.userId,
                //"postUserNickname": res.data.postUserNickname,
            })
        })
    }

     //상품에 달린 댓글 정보
    const[comments,setComments] = useState([]);


    const[commentInputText,setCommentInputText] = useState('');


    const commentChange = (e) => {
        setCommentInputText(e.target.value)
    };

    const commentSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `/comment/`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            data: {
                "product": history.location.props,
                "comment": commentInputText,
            }
        })
        .then(res => {
            alert('댓글 작성 성공!!');
        })
        .catch(error => alert('댓글 작성 실패..'))
    };


    useEffect(() => {

        console.log(history.location.props)
        axios({
            method: 'get',
            url: `/product/${history.location.props}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            }
        })
        .then( res => {
            console.log(res);
            setProduct({
                "product_id": res.data.id,
                "product_name": res.data.product_name,
                "product_location": res.data.product_location,
                "product_detail": res.data.product_detail,
                "product_img": res.data.product_img,
                "product_lend_h": res.data.product_lend_h,
                "product_lend_d": res.data.product_lend_d,
                "product_type": res.data.product_type,
                "author": res.data.author,
                //"postUserNickname": res.data.postUserNickname,
            });
            setComments(res.data.comments)
        })
        
        
    },[])

    return (
        <div className={styles.container}>
                {/* 이미지 박스 */}
                <div className={styles.imgBox}>
                <button onClick={goBack} className={styles.goBackBtn}><i className="fas fa-arrow-left"></i></button>
                    <img 
                        className={styles.product_img}
                        src={product.product_img}
                        alt="" 
                    />
                </div>
                <div className={styles.product_info}>
                {/* 등록자 정보 */}
                <header className={styles.userBox}>
                    <div className={styles.profile_left}>
                        <button className={styles.profileImg}><i className="fas fa-user-circle"></i></button>
                    </div>
                    <div className={styles.product_nickneme}>
                        {/* 닉네임으로 바꿔줘야함 */}
                        <span>{product.author}</span>
                        <div className={styles.location}>
                            <span>{product.product_location}</span>
                        </div>
                    </div>
                    {/* 내 상품일때만 상품등록저장 */}
                    <div className={styles.btnBox}>
                        <button className={styles.btnUpdate}>수정</button>
                        <button className={styles.btnDelete}>삭제</button>
                    </div>
                </header>
                {/* 상품 정보 */}
                <section className={styles.product_detail}>
                    <div className={styles.product_title}>
                        <span>{product.product_name}</span>
                    </div>
                    <div className={styles.type}>
                        <span>{product.product_type}</span>
                    </div>
                    <div className={styles.product_description}>
                        <span>{product.product_detail}</span>
                    </div>
                </section>
            </div>
             {/* 댓글 */}
            <CommentList comments={comments}/>
                {/* 댓글 입력 폼 */}
                <form className={styles.commentForm} onSubmit={commentSubmit}>
                    <textarea className={styles.commentInput} name="comment" type="text" placeholder="댓글을 입력해 주세요." 
                    value={commentInputText} onChange={commentChange}/>
                    <button className={styles.commentSubmitBtn}>댓글쓰기</button>
                </form>
        </div>

    );


};

export default ProductDetail;