import Header from './component/header/header';
import styles from './app.module.css';
import Footer from './component/footer/footer';
import ProductList from './component/product_list/product_list';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './component/register_login/login';
import ProductRegister from './component/product_register/product_register';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <ProductList />
            <Footer />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/product_register">
            <ProductRegister />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
