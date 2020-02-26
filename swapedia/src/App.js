import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Swapedia from './containers/Swapedia';
// import PersonList from './containers/PersonList/PersonList';
import Header from './components/Header';
import FilmDetail from './containers/FilmDetail';

import './App.css';
import List from './containers/List';

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