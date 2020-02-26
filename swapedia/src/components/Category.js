import React from 'react';
import { NavLink } from 'react-router-dom';

const category = (props) => {
    // categoryClickedHandler = () => {
    //     this.props.history.push(props.link);
    // }

    return (
        <NavLink to={props.link} exact>
            <div className="card" onClick={props.clicked}>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p>{props.desc}</p>
                </div>
            </div>
        </NavLink>
    );
}
 
export default category;