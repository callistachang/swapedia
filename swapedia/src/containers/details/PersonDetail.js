import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class FilmDetail extends Component {
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
                    <p>Height: {this.state.details.height}cm</p>
                    <p>Mass: {this.state.details.mass}kg</p>
                    <p>Hair color: {this.state.details.hair_color}</p>
                    <p>Skin color: {this.state.details.skin_color}</p>
                    <p>Eye color: {this.state.details.eye_color}</p>
                    <p>Birth year: {this.state.details.birth_year}</p>
                    <p>Gender: {this.state.details.gender}</p>
                </div>
            )
        }


        return (
            // <p>{this.state.details.title}</p>
            <p>{display}</p>
        );
    }
}
 
export default FilmDetail;