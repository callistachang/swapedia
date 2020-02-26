import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class SpecieDetail extends Component {
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
                    <p>Classification: {this.state.details.classification}</p>
                    <p>Designation: {this.state.details.designation}</p>
                    <p>Average height: {this.state.details.average_height}</p>
                    <p>Skin colors: {this.state.details.skin_colors}</p>
                    <p>Hair colors: {this.state.details.hair_colors}</p>
                    <p>Eye colors: {this.state.details.eye_colors}</p>
                    <p>Average lifespan: {this.state.details.average_lifespan}</p>
                    <p>Language: {this.state.details.language}</p>
                </div>
            )
        }


        return (
            // <p>{this.state.details.title}</p>
            <p>{display}</p>
        );
    }
}
 
export default SpecieDetail;