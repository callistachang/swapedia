import React, { Component } from 'react';
import Axios from 'axios';

import FilmDisplay from '../components/displays/FilmDisplay';
import PersonDisplay from '../components/displays/PersonDisplay';
import StarshipDisplay from '../components/displays/StarshipDisplay';
import VehicleDisplay from '../components/displays/VehicleDisplay';
import SpecieDisplay from '../components/displays/SpecieDisplay';
import PlanetDisplay from '../components/displays/PlanetDisplay';

class List extends Component {
    state = {
        list: [],
        loadPercentage: 0,
        isLoaded: false,
    }

    componentDidMount() {
        localStorage.getItem('list' + this.props.location.pathname).length !== 2 ? 
            this.setState({list: JSON.parse(localStorage.getItem('list' + this.props.location.pathname)), isLoaded: true}) :
            this.fetchData(this.props.location.pathname, []);
    };

    componentWillUnmount() {
        localStorage.setItem('list' + this.props.location.pathname, JSON.stringify(this.state.list))
    }

    fetchData = (link, updatedList) => {
        console.log('fetch')
        Axios.get(link)
            .then(response => {
                updatedList.push(...response.data.results);
                this.setState({list: updatedList});

                if (response.data.next) {
                    this.fetchData(response.data.next, updatedList);
                } else {
                    this.setState({isLoaded: true});
                }

                this.setState({loadPercentage: Math.round(this.state.loadPercentage+1000/response.data.count)})
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
                    <p>Load progress: {this.state.loadPercentage}%</p>
                </div>
            )
        } else {
            switch (this.props.location.pathname) {
                case '/films':
                    display = this.state.list.map(listObj => {
                        return (
                            <FilmDisplay
                                link={this.extractId(listObj.url)}
                                episode_id={listObj.episode_id}
                                title={listObj.title}
                                release_date={listObj.release_date} />
                        )
                    });
                    break
                case '/people':
                    display = this.state.list.map(listObj => {
                        return (
                            <PersonDisplay
                                link={this.extractId(listObj.url)}
                                name={listObj.name}/>
                        )
                    });
                    break
                case '/starships':
                    display = this.state.list.map(listObj => {
                        return (
                            <StarshipDisplay
                            link={this.extractId(listObj.url)}
                                name={listObj.name}
                                model={listObj.model}/>
                        )
                    });
                    break
                case '/vehicles':
                    display = this.state.list.map(listObj => {
                        return (
                            <VehicleDisplay
                            link={this.extractId(listObj.url)}
                                name={listObj.name}
                                model={listObj.model}/>
                        )
                    });
                    break               
                case '/planets':
                    display = this.state.list.map(listObj => {
                        return (
                            <PlanetDisplay
                            link={this.extractId(listObj.url)}
                                name={listObj.name}/>
                        )
                    });   
                    break               
                case '/species':
                    display = this.state.list.map(listObj => {
                        return (
                            <SpecieDisplay
                            link={this.extractId(listObj.url)}
                                name={listObj.name}
                                classification={listObj.classification}/>
                        )
                    });
                    break
            }
        }

        return (
            <div className="List">
                <div className="row">
                    {display}
                </div>
            </div>
        );
    }
}
 
export default List;