import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import ProductList from '../product_list/product_list';
import styles from './main.module.css';

const Main = (props) => {
        



    
    
    return (
        <div className={styles.main}>
            <Header />
            <ProductList />
            <Footer />
        </div>
    );

};

export default Main;