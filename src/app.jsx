import Header from './component/header/header';
import styles from './app.module.css';
import Footer from './component/footer/footer';
/* import ProductList from './component/product_list/product_list';
 */import Login from './component/register_login/login';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      {/* <ProductList /> */}
      <Login />
      <Footer />
      <button className={styles.float}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default App;
