import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
        </div>
      </Switch>
    </div>
  );
}

export default App;
