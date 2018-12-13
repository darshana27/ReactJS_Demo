import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/products/:id" component={Products}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/product_details/:id" component={ProductDetails}/>
        </div>
      </Router>
    );
  }
}

export default App;
