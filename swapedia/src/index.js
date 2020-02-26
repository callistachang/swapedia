import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://swapi.co/api/'

ReactDOM.render(<App />, document.getElementById('root'));
