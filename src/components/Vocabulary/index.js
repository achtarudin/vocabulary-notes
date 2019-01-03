/**
 * Vocabulary dir, file index.js
 */
import React from 'react';
import { Container } from 'reactstrap';

export class Vocabulary extends React.Component {
  render() {
    return (
      <div>
        <br/>
        <Container>
          <h2>Vocabulary {this.props.data}</h2>
        </Container>
      </div>
    );
  }
}
