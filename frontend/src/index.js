import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import Navbar from "./components/navbar";

ReactDOM.render(  
  <React.StrictMode>
    <Navbar/>
  </React.StrictMode>,
  document.getElementById('root')
);

