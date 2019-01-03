import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Container } from 'reactstrap';
export function Topics({ match }) {
  console.log(match);
  return (
    <div>
      <br/>
      <Container>
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
      </Container>
      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact path={match.path}
        render={() => <Container> <h3>Please select a topic.</h3></Container>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <Container>
        <h3>{match.params.topicId}</h3>
      </Container>
    </div>
  );
}