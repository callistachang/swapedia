import React, { Component } from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';

// import PersonList from './PersonList/PersonList';
import Categories from '../components/Categories';
import Header from '../components/Header';

class Swapedia extends Component {
    render() { 
        return (
            <div className="Swapedia">
                <Categories />
            </div>
        );
    }
}
 
export default Swapedia;