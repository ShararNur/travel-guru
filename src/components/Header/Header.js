import React, { useContext } from 'react';
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import logo from '../../resources/Logo.png';
// import logo2 from '../../resources/Logo.png';
import './Header.css';
import searchIcon from './../../resources/Icon/search.svg'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const Header = () => {
    let location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Container style={{ paddingInline: '61px' }}>
            <Navbar expand="lg" className="pt-4 text-primary ">
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        width="auto"
                        height="56"
                        className={`d-inline-block align-top ${location.pathname === '/' || location.pathname.includes("/booking") ? 'logo' : ''}`}
                        alt="Travel Guru logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='d-lg-flex justify-content-lg-end'>

                    {/* <Nav className="navBarSearchForm pl-3">
                        <div className="search-bar">
                            <img src={searchIcon} alt="search icon" className='icon' />
                            <input type="search"
                                placeholder="Search your Destination..."
                                className="search-input-field"
                            />
                        </div>
                    </Nav> */}
                    {(location.pathname === '/' || location.pathname.includes("/booking")) &&
                        <Form inline className="m-auto navBarSearchForm pl-3">
                            <div className="d-flex align-items-center">
                                <img src={searchIcon} alt="search icon" className='icon' />
                                <input type="search" placeholder="Search your Destination..." className="mr-sm-2 search-input" />
                            </div>
                        </Form>
                    }

                    <Nav className={`ml-auto d-md-flex align-items-lg-center ${location.pathname === '/' || location.pathname.includes("/booking") ? 'header-nav2' : 'header-nav'}`}>
                        <Nav.Link to="#" className="px-4">News</Nav.Link>
                        <Nav.Link to="#" className="px-4">Destination</Nav.Link>
                        <Nav.Link to="#" className="px-4">Blog</Nav.Link>
                        <Nav.Link to="#" className="px-4">Contact</Nav.Link>
                        {
                            loggedInUser.success
                                ?
                                <>
                                    {/* <p style={{ display: 'inline', color: 'red', marginRight: '15px' }}>Welcome {loggedInUser.displayName}</p> */}
                                    <Link to="#" className="login-btn" onClick={() => setLoggedInUser({})}>Log out</Link>
                                </>
                                :
                                <Link to="/login" className="login-btn ">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;