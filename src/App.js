import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop-page/shop-page.component'
import Header from './components/header/header.component';
import SigninPage from './pages/signin-page/signin-page.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { fireAuth, createUserProfile } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {
  authSubscription = null

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.authSubscription = fireAuth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: snapShot.id,
            ...snapShot.data()
          })
        });
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SigninPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
