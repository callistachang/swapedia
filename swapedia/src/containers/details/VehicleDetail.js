import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class VehicleDetail extends Component {
    state = {
        details: null,
        isLoaded: false,
    };

    componentDidMount() {
        this.fetchData(this.props.location.pathname);
    };

    fetchData = (link) => {
        Axios.get(link)
            .then(response => {
                this.setState({details: response.data});
                this.setState({isLoaded: true});
            })
            .catch(error => {
                console.log(error);
            });
    }

    extractId = (link) => {
        return link.slice(21);
    }

    getName = (link) => {
        Axios.get(link)
            .then(response => {
                return response.data.name;
            })
    }

    // characters = this.state.details.characters.map(link => {
    //     ;
    // })

    render() {
        let display = null;
        if (!this.state.isLoaded) {
            display = (
                <div className="col-sm">
                    <p>Fetching data from a galaxy far, far away...</p>
                </div>
            )
        } else {
            display = (
                <div className="col-sm">
                    <p>Name: {this.state.details.name}</p>
                    <p>Model: {this.state.details.model}</p>
                    <p>Manufacturer: {this.state.details.manufacturer}</p>
                    <p>Cost in credits: {this.state.details.cost_in_credits}</p>
                    <p>Length: {this.state.details.length}</p>
                    <p>Max atmosphering speed: {this.state.details.max_atmosphering_speed}</p>
                    <p>Crew: {this.state.details.crew}</p>
                    <p>Passengers: {this.state.details.passengers}</p>
                    <p>Cargo capacity: {this.state.details.cargo_capacity}</p>
                    <p>Consumables: {this.state.details.consumables}</p>
                    <p>Vehicle class: {this.state.details.vehicle_class}</p>
                </div>
            )
        }


        return (
            // <p>{this.state.details.title}</p>
            <p>{display}</p>
        );
    }
}
 
export default VehicleDetail;