import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./styles.css";

export default class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="Home">
                        Helper Hacker
                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="Home" style={{color:"#ff6325"}}>Home</Nav.Link>
                            <Nav.Link className="nav-links" href="Team">Team</Nav.Link>
                            <Nav.Link className="nav-links" href="Meeting">Meeting</Nav.Link>
                            <Nav.Link className="nav-links" href="Login">Login</Nav.Link>
                            <Nav.Link className="nav-links" href="Register">Register</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div >
        )
    }
}