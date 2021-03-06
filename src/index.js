import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import New from './New';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
  <Router>
    <Route exact path ="/"> <App/> </Route>

    <Route exact path="/New"> <New /> </Route>
  </Router>,
  document.getElementById('root')
);
   // <Route exact path="/about"   render={() => (<div>List of Items</div>)} />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
