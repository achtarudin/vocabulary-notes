
import React, { Component }from 'react';
import { Route, Link } from 'react-router-dom';
import { Vocabulary } from './components/Vocabulary';
import { Grammer } from './components/Grammer';
import { Listening } from './components/Listening';
import {Topics} from './components/Testing-Pages/nestedPath'
import { ComunicateToServer as Server } from './components/Testing-Pages/comunicateToServer';
import { Nav, NavItem, NavLink, Container } from 'reactstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'cabe',
      dropdownOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
 
  addActiveClass() {
    console.log(window.location);
  }
  componentDidMount() {
    this.addActiveClass();
  }
  render() {
    const { data } = this.state;    
    return (
      <div>
        <br/>
        <Container>
          <Nav pills>
            <NavItem>
              <NavLink href="/grammer" active={true}>Vocabulary -Notes</NavLink>
              {/* <Link
                className="nav-link active"
                to="#">Vocabulary -Notes</Link> */}
            </NavItem>
          </Nav>
          <Nav tabs className="justify-content-center">
            <NavItem>
              <Link
                className="nav-link active"
                to="/">Vocabulary</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/grammer">Grammer</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/listening">Listening</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/topics">Topics</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/server">Server</Link>
            </NavItem>
          </Nav>
        </Container>
        
        
        <Route exact path="/" render={(props) => <Vocabulary {...props}  data={data}/>} />
        <Route path="/grammer" component={Grammer} />
        <Route path="/listening" component={Listening} />
        <Route path="/topics" component={Topics} />
        <Route path="/server" render={() => <Server /> } />
      </div>
    );
  }
}
export default App;