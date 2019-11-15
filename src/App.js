import React, {useState} from 'react';
import QuoteMachine from './components/quoteMachine';
import logo from './logo.svg';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [collapse, toggle] = useState(false);

  return (
    <Router>
      <MDBNavbar dark expand="md" fixed="top">
              <MDBNavbarToggler onClick={ () => toggle(!collapse) } />
              <MDBCollapse isOpen = { collapse } navbar>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                      <MDBNavLink to="/">RandomQuoteMachine</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="/2" className='disabled'>Assignment 2</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="/3" className='disabled'>Assignment 3</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/4" className='disabled'>Assignment 4</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <a className='nav-link' href="https://www.linkedin.com/in/javfr/"><MDBIcon fab icon="linkedin" size='2x'/></a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a className='nav-link' href="https://github.com/JavFr/"><MDBIcon fab icon="github" size='2x' /></a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a className='nav-link' href="https://www.freecodecamp.org/javfr" ><MDBIcon fab icon="free-code-camp" size='2x'/></a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
      <ReactFCCtest />
      <Switch>
        <Route path="/2">
          <div className='d-flex align-items-center bg-default' style={{minHeight: '100vh'}}>
            
          </div>
        </Route>
        <Route path="/">
          <div className='d-flex align-items-center bg-default' style={{minHeight: '100vh'}}>
            <QuoteMachine />
          </div>
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
