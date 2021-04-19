import logo from './logo.svg';
import React, { useState,useEffect } from 'react';
import Category from './components/Category';
import Expenses from './components/Expenses';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path="/" exact={true} component={Home}/>
              <Route path="/categories" exact={true} component={Category}/>
              <Route path="/expenses" exact={true} component={Expenses}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
