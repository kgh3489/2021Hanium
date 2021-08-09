import Header from './component/header/header';
import styles from './app.module.css';
import Footer from './component/footer/footer';
import ProductList from './component/product_list/product_list';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './component/register_login/login';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/2021Hanium">
            <Header />
            <ProductList />
            <Footer />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
