import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../resources/logo_white.png';
import logo2 from '../../resources/Logo.png';
import './Header.css';
import searchIcon from './../../resources/Icon/search.svg'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const Header = () => {
    let location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);




    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
            <Container className="mt-4 ">
                <NavLink to="/">{location.pathname === "/" ? <img
                    src={logo}
                    width="auto"
                    height="56"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /> : <img
                    src={logo2}
                    width="auto"
                    height="56"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />}</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {location.pathname === "/" &&
                        <Nav className="">
                            <div className="search-bar">
                                <img src={searchIcon} alt="search icon" className='icon' />
                                <input type="search"
                                    placeholder="Search your Destination..."
                                    className="search-input-field"
                                />
                            </div>
                        </Nav>
                    }
                    <Nav>
                        <Nav.Link href="#" className={`${location.pathname === "/" ? "text-white" : "text-dark"} mr-50`}>News</Nav.Link>
                        <Nav.Link href="#" className={`${location.pathname === "/" ? "text-white" : "text-dark"} mr-50`}>Destination</Nav.Link>
                        <Nav.Link href="#" className={`${location.pathname === "/" ? "text-white" : "text-dark"} mr-50`}>Blog</Nav.Link>
                        <Nav.Link href="#" className={`${location.pathname === "/" ? "text-white" : "text-dark"} mr-50`}>Contact</Nav.Link>
                        {
                            loggedInUser.success
                                ?
                                <>
                                    <p style={{ display: 'inline', color: 'red', marginRight: '15px' }}>Welcome {loggedInUser.displayName}</p>
                                    <Link to="#" className="login-btn" onClick={() => setLoggedInUser({})}>Log out</Link>
                                </>
                                :
                                <Link to="/login" className="login-btn">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;