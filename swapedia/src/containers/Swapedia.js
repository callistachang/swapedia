import React, { Component } from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';

// import PersonList from './PersonList/PersonList';
import Categories from '../components/Categories';
import Header from '../components/Header';

class Swapedia extends Component {
    render() { 
        const style = {
            textAlign: 'center',
        }

        return (
            <div className="Swapedia" style={style}>
                <Categories />
            </div>
        );
    }
}
 
export default Swapedia;