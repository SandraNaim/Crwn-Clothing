import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';

import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-out/sign-in-and-sign-up.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions';

const App = () => {

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  // example on useSelectors:
  // const isHidden = useSelector((state) => state.cart.hidden);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? ( <Redirect to='/' /> ) : ( <SignInAndSignUp /> ) } />
      </Switch>
    </div>
  );
}

export default App;
