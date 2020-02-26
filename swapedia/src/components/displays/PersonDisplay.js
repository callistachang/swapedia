import React from 'react';
import { NavLink } from 'react-router-dom';

const personDisplay = (props) => {
    return (
        <div className="col-sm-3">
            <NavLink to={props.link} exact>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}
 
export default personDisplay;