// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   state = {
//     response: '',
//     post: '',
//     responseToPost:''
//   }

//   callApi = async () => {
//     const response = await fetch('/api/hello');
//     const body = await response.json();
//     if (response.status !== 200) throw Error(body.message);
//     return body;
//   };

//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }
//   handleSubmit = async e => {
//     e.preventDefault();
//     const response = await fetch('/api/world', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ post: this.state.post }),
//     });
//     const body = await response.text();
//     this.setState({ responseToPost: body });
//   };
//   render() {
//     return (
//       <div className="App">
        
//         <p>{this.state.response}</p>
//         <form onSubmit={this.handleSubmit}>
//           <p>
//             <strong>Post to Server:</strong>
//           </p>
//           <input
//             type="text"
//             value={this.state.post}
//             onChange={e => this.setState({ post: e.target.value })}
//           />
//           <button type="submit">Submit</button>
//         </form>
//         <p>{this.state.responseToPost}</p>
//       </div>
//     );
//   }
// }

// export default App;
import React from "react";
import { Route, Link } from "react-router-dom";
import { Vocabulary } from './components/Vocabulary';
import { Grammer } from './components/Grammer';
import { Listening } from './components/Listening';


function App() {
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
        </ul>

        <hr />

      <Route exact path="/" component={Vocabulary} />
      <Route path="/grammer" component={Grammer} />
      <Route path="/listening" component={Listening} />
      <Route path="/topics" component={Topics} />
      </div>
  );
}


function Topics({ match }) {  
  console.log(match);
  
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default App;