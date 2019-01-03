
import React, { Component }from 'react';
import { Route, Link } from 'react-router-dom';
import { Vocabulary } from './components/Vocabulary';
import {Grammer}  from './components/Grammer';
import { Listening } from './components/Listening';
import {Topics} from './components/Testing-Pages/nestedPath'
import { ComunicateToServer as Server } from './components/Testing-Pages/comunicateToServer';
import { Child as ChildToParent } from './components/Testing-Pages/childToParent';
import { Nav, NavItem, NavLink, Container } from 'reactstrap';
import PropTypes from 'prop-types'
// import Child from './components/Testing-Pages/childToParent'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'cabe',
      dropdownOpen: false,
      counter: 0,
      pageVocabulary: true,
      pageGrammer: false,
      pageListening: false,
    }
    this.update = this.update.bind(this);
    this.path = this.path.bind(this)
  }
 
  addActiveClass(path) {
    return path === window.location.pathname
  }

  componentDidMount() {
    this.addActiveClass()
  }

  path() {   
    if (window.location.pathname === '/') {
      this.setState({
        pageVocabulary: true,
        pageGrammer: false,
        pageListening: false,
      })
    }
    else if (window.location.pathname === '/grammer') {
      this.setState({
        pageVocabulary: false,
        pageGrammer: true,
        pageListening: false,
      })
    }
    else {
      this.setState({
        pageVocabulary: false,
        pageGrammer: false,
        pageListening: true,
      })
    }
  }

  update(value) {
    this.setState({
      counter: value
    });
  }
  render() {
    const { data } = this.state;    
    return (
      <div>
        <br />
        <Container>
          <Nav pills>
            <NavItem>
              <NavLink href="/" active>Vocabulary -Notes</NavLink>
            </NavItem>
          </Nav>
          <Nav tabs className="justify-content-center">
            <NavItem
              onClick={(e) => this.path(e)}>
              <Link
                className={"nav-link " + (this.state.pageVocabulary ? 'active': '')}
                to="/">Vocabulary</Link>
            </NavItem>
            <NavItem
              onClick={(e) => this.path(e)}>
              <Link
                className={"nav-link " + (this.state.pageGrammer ? 'active' : '')}
                to="/grammer">Grammer</Link>
            </NavItem>
            <NavItem
              onClick={(e) => this.path(e)}>
              <Link
                className={"nav-link " + (this.state.pageListening ? 'active' : '')}
                to="/listening">Listening</Link>
            </NavItem>
            <NavItem
              onClick={(e) => this.path(e)}>
              <Link className="nav-link" to="/topics">Topics</Link>
            </NavItem>
            <NavItem
              onClick={(e) => this.path(e)}>
              <Link className="nav-link" to="/server">Server</Link>
            </NavItem>
            <NavItem
              onClick={(e) => this.path(e)}>
              <Link className="nav-link" to="/child">Child</Link>
            </NavItem>
          </Nav>
        </Container>

        <div>
          {/* <span>{this.state.counter}</span> */}
          {/* <ChildToParent sendData={this.update} /> */}
        </div>
        
        
        <Route exact path="/" render={(props) => <Vocabulary {...props}  data={data}/>} />
        <Route path="/grammer" component={Grammer} />
        <Route path="/listening" component={Listening} />
        <Route path="/topics" component={Topics} />
        <Route path="/server" render={() => <Server />} />
        <Route path="/child" render={(props) => {
          // console.log(props);
          return (
            <ChildToParent {...props} sendData={this.update} />
          );
          // <ChildToParent {...props} sendData={this.update} />
        }  
         }
        />

      </div>
    );
  }
}
export default App;
NavItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  // pass in custom element to use
}