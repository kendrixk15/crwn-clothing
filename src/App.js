import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () =>(
  <dvi>
    <h1>Hats Page</h1>
  </dvi>
);

const JacketsPage = () =>(
  <dvi>
    <h1>jackets Page</h1>
  </dvi>
);
const SneakersPage = () =>(
  <dvi>
    <h1>Sneakers Page</h1>
  </dvi>
);

function App() {
  return (
    <Switch>
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop/hats" component={HatsPage}/>
      <Route path="/shop/jackets" component={JacketsPage}/>
      <Route path="/shop/sneakers" component={SneakersPage}/>
    </div>
    </Switch>
  );
}

export default App;
