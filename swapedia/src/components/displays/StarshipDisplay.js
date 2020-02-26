import React from 'react';

const starshipDisplay = (props) => {
    return (
            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p>Model: {props.model}</p>
                    </div>
                </div>
            </div>
    );
}
 
export default starshipDisplay;