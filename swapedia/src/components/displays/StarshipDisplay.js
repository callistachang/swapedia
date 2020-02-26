import React from 'react';
import { NavLink } from 'react-router-dom';

const starshipDisplay = (props) => {
    return (
            <div className="col-sm-3">
                <NavLink to={props.link}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p>Model: {props.model}</p>
                    </div>
                </div>
                </NavLink>
            </div>
    );
}
 
export default starshipDisplay;