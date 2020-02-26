import React from 'react';
import { Link, Route } from 'react-router-dom';

import Logo from '../assets/logo.png'
import Swapedia from '../containers/Swapedia';

const header = () => {
    return (
        <div className="Header">
            <nav class="navbar navbar-expand bg-secondary">
                <div class="nav navbar-nav">
                    <Link to="/" exact>
                        <img src={Logo} height="50" alt="Star Wars" />
                    </Link>
                </div>
            </nav>
        </div>
    );
}
 
export default header;