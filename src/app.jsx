import Header from './component/header/header';
import styles from './app.module.css';
import Footer from './component/footer/footer';
import ProductList from './component/product_list/product_list';

function App() {
  return (
    <div className={styles.app}>
    <Header />
    <ProductList />
    <Footer />
    </div>
  );
}

export default App;
