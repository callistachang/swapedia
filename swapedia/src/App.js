import React from 'react';
import './App.css';
import { Swapedia } from './containers/Swapedia';

class App extends Component {
  state = {
    category: null,
  }

  render() { 
    return (
      <BrowserRouter>
        <div className="App">
          <Swapedia />
        </div>
      </BrowserRouter>
    );
  }
}
 
export default App;