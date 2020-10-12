import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/hompage.component'
import ShopPage from './pages/shop-page/shop-page.component'
import Header from './components/header/header.component';
import SigninPage from './pages/signin-page/signin-page.component';

import { fireAuth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }

  }
  
  authSubscription = null

  componentDidMount() {
    this.authSubscription = fireAuth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.authSubscription();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SigninPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
