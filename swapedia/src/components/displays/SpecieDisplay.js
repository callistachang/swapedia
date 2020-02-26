import React from 'react';
import { NavLink } from 'react-router-dom';

const vehicleDisplay = (props) => {
    return (
            <div className="col-md-3 col-sm-4">
                        <NavLink to={props.link}>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p>Classification: {props.classification}</p>
                    </div>
                </div>
                </NavLink>

            </div>
    );
}
 
export default vehicleDisplay;