import React from 'react';
import { NavLink } from 'react-router-dom';

const filmDisplay = (props) => {
    return (
        <div className="col-sm-6">
            <NavLink to={props.link}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Episode {props.episode_id}: {props.title}</h5>
                        <p>Release date: {props.release_date}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}
 
export default filmDisplay;