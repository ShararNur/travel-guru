import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Container, Button } from 'react-bootstrap';
import logo from '../../resources/logo_white.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

    return (
        <Container className="mb-5 ">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container className="mt-4">
                    <Navbar.Brand href="#home"><img
                        src={logo}
                        width="auto"
                        height="56"
                        className="d-inline-block align-top me-4"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <div className="m-auto ms-5">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                                <input type="search"
                                    placeholder="Search your Destination..."
                                    className="search-field"
                                />
                            </div>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" className="text-white mx-4">News</Nav.Link>
                            <Nav.Link href="#deets" className="text-white mx-4">Destination</Nav.Link>
                            <Nav.Link href="#deets" className="text-white mx-4">Blog</Nav.Link>
                            <Nav.Link href="#deets" className="text-white mx-4">Contact</Nav.Link>
                            <Button variant="warning" className="ms-3 px-4 btn-font">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;