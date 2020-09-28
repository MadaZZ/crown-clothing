import React from 'react';
import './App.css';
import HomePage from './pages/homepage/hompage.component';
import { Switch, Route } from 'react-router-dom'

const HatsPage = () => {
  return (
    <div>
      <h1>Helloooo!</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
