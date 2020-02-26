import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class PlanetDetail extends Component {
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
                    <p>Rotation period: {this.state.details.rotation_period}</p>
                    <p>Orbital period: {this.state.details.orbital_period}</p>
                    <p>Diameter: {this.state.details.diameter}</p>
                    <p>Climate: {this.state.details.climate}</p>
                    <p>Gravity: {this.state.details.gravity}</p>
                    <p>Terrain: {this.state.details.terrain}</p>
                    <p>Surface water: {this.state.details.surface_water}</p>
                    <p>Population: {this.state.details.population}</p>
                </div>
            )
        }


        return (
            // <p>{this.state.details.title}</p>
            <p>{display}</p>
        );
    }
}
 
export default PlanetDetail;