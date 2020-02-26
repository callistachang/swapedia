import React from 'react';

const PlanetDisplay = (props) => {
    return (
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {props.name}
                    </h5>
                </div>
            </div>
        </div>
    );
}
 
export default PlanetDisplay;