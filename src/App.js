import React, { Component }from 'react';
import { Route, Link } from 'react-router-dom';
import { Vocabulary } from './components/Vocabulary';
import { Grammer } from './components/Grammer';
import { Listening } from './components/Listening';
import {Topics} from './components/Testing-Pages/nestedPath'
import  Server from './components/Testing-Pages/comunicateToServer'

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Vocabulary</Link>
          </li>
          <li>
            <Link to="/grammer">Grammer</Link>
          </li>
          <li>
            <Link to="/listening">Listening</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/server">Server</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Vocabulary} />
        <Route path="/grammer" component={Grammer} />
        <Route path="/listening" component={Listening} />
        <Route path="/topics" component={Topics} />
        <Route path="/server" component={Server} />

      </div>
    );
  }
}
export default App;