import React from 'react';

const vehicleDisplay = (props) => {
    return (
        <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Episode {props.episode_id}: {props.title}</h5>
                    <p>Release date: {props.release_date}</p>
                </div>
            </div>
        </div>
    );
}
 
export default vehicleDisplay;