import React from 'react';
import { Container, Button } from 'reactstrap';


export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter2: 5
    }
    this.sendData = this.sendData.bind(this)
  }
  sendData() {    
    return this.props.sendData(this.state.counter2);
  }

  render() {
    return (
      <div>
        <Container>
          <Button color="primary" onClick={() => this.sendData()}>Click me</Button>
           <span>{this.state.counter2}</span>
        </Container>
      </div>
    );
  }
}

export default Child;