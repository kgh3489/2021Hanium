import Header from './component/header/header';
import styles from './app.module.css';
import Footer from './component/footer/footer';
import ProductList from './component/product_list/product_list';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './component/register_login/login';
import ProductRegister from './component/product_register/product_register';
import KakaoAuthRedirect from './component/kakaoAuthRedirect/kakaoAuthRedirect';
import SignUp from './component/register_login/signUp';

function App({kakaoAuthService}) {
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
          <Route exact path="/oauth/kakao">
            <KakaoAuthRedirect kakaoAuthService={kakaoAuthService}/>
          </Route>

          <Route exact path="/signUp">
            <SignUp />
          </Route>


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
