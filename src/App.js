import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/hompage.component'
import ShopPage from './pages/shop-page/shop-page.component'
import Header from './components/header/header.component';
import SigninPage from './pages/signin-page/signin-page.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SigninPage}/>
      </Switch>
    </div>
  );
}

export default App;
