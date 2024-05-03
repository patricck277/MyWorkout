// src/pages/Login.js
import React, { useState } from 'react';
import { Button, Form, Container, Alert, Col, Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import './Login.css';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useUser();

    const handleLogin = (event) => {
        event.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem(username));
        if (storedUser && storedUser.password === btoa(password)) {
            login(storedUser);
            navigate('/userprofile');
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <div className="background-image">
            <div className="text-content">
                <Container fluid className="hero-section">
                    <Row className="align-items-center">
                        <Col md={6} className="hero-text">
                            <h1 className="fadeIn">LOGIN TO</h1>
                            <h1 className="fadeIn">YOUR ACCOUNT</h1>                          
                        </Col>
                        <Col md={6} className="hero-image fadeIn">
                            <img src='/photos/home.png' alt='Workout' className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
             
                <Container className="d-flex justify-content-center align-items-center hero-section" style={{ minHeight: "30vh" }}>
                    <Row className="w-100">
                        <Col md={6} className="mx-auto">
                            {error && <Alert variant="success" style={{ textAlign: 'center', width: '100%' }}>{error}</Alert>}
                            <Card>
                                <Card.Body>
                                    <Form onSubmit={handleLogin}>
                                        <Form.Group controlId="username">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group controlId="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                        </Form.Group>

                                        <Button type="submit" className="w-100 mt-3" style={{ backgroundColor: 'black', color: 'white' }}>Login</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Login;
