import React, { Component } from 'react';
import Axios from 'axios';

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
                console.log(this.state.details.title);
            })
            .catch(error => {
                console.log(error);
            });
    }

    extractId = (link) => {
        return link.slice(21);
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
                    <p>Title: {this.state.details.title}</p>
                    <p>Episode ID: {this.state.details.episode_id}</p>
                    <p>Opening crawl: {this.state.details.opening_crawl}</p>
                    <p>Director: {this.state.details.director}</p>
                    <p>Producer: {this.state.details.producer}</p>
                    <p>Release date: {this.state.details.release_date}</p>
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