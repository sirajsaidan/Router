import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import{BrowserRouter,Route,Switch} from 'react-router-dom'
import Products from './Products';
import Navbar from './Navbar'
import Home from './Home'
import Gategory from './Gategory';
import Adminarea from './Adminarea'
ReactDOM.render(
  <BrowserRouter>
  <Navbar/>
  <Switch>
  <Route path='/Home' component={Home}/>

  <Route path='/Adminarea' component={Adminarea}/>

    <Route path='/Gategory' component={Gategory}/>
<Route path="/products" component={Products}/>
<Route path="/admin" render={()=><p>welcom </p>}/>
</Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
