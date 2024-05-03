import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useUser } from '../contexts/UserContext';

const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useUser(); // Użyj hooka useUser do dostępu do danych użytkownika i funkcji logout

    useEffect(() => {
        // Tylko logowanie, ale teraz będzie reagować na zmiany usera
    }, [user]); // Dodaj user jako zależność

    const handleLogout = () => {
        logout(); // Wywołaj funkcję logout z UserContext
        navigate('/'); // Przekierowanie na stronę główną
    };



    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="px-md-5">
            <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">My Workout App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-center" style={{ width: "100%" }}>
                    <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
                    <Nav.Link as={Link} to="/workouts" className="nav-link-custom">Workouts</Nav.Link>
                    <Nav.Link as={Link} to="/nutrition" className="nav-link-custom">Nutrition</Nav.Link>
                    <Nav.Link as={Link} to="/programs" className="nav-link-custom">Programs</Nav.Link>
                    <NavDropdown title="More" id="basic-nav-dropdown" className="nav-link-custom dropdown-custom">
                        <NavDropdown.Item as={Link} to="/community" className="nav-link-custom">Community</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/resources" className="nav-link-custom">Resources</NavDropdown.Item>
                        {/* more */}
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-light">Search</Button>
                </Form>
                <Nav>
                    {user ? (
                        <>
                            <Nav.Link as={Link} to="/userprofile" className="nav-link-custom">My Account</Nav.Link>
                            <Nav.Link onClick={handleLogout} className="nav-link-custom">Logout</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link} to="/login" className="nav-link-custom">Login</Nav.Link>
                            <Nav.Link as={Link} to="/signup" className="nav-link-custom">Sign Up</Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
