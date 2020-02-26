import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Swapedia from './containers/Swapedia';
// import PersonList from './containers/PersonList/PersonList';
import Header from './components/Header';
import FilmDetail from './containers/details/FilmDetail';
import PersonDetail from './containers/details/PersonDetail';
import SpecieDetail from './containers/details/SpecieDetail';


import './App.css';
import List from './containers/List';
import PlanetDetail from './containers/details/PlanetDetail';
import VehicleDetail from './containers/details/VehicleDetail';
import StarshipDetail from './containers/details/StarshipDetail';

class App extends Component {
  state = {
    category: null,
  }

  render() { 
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/films/:id' component={FilmDetail} exact/>
            <Route path='/people/:id' component={PersonDetail} exact/>
            <Route path='/planets/:id' component={PlanetDetail} exact/>
            <Route path='/species/:id' component={SpecieDetail} exact/>
            <Route path='/vehicles/:id' component={VehicleDetail} exact/>
            <Route path='/starships/:id' component={StarshipDetail} exact/>

            {
              ['/films', '/people', '/planets', '/species', '/vehicles', '/starships']
                .map(path => (
                  <Route path={path} component={List} exact />
                )
              )
            }
                        <Route path='/' component={Swapedia} exact />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default App;