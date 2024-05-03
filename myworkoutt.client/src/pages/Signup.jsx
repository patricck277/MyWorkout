import React, { useState } from 'react';
import { Button, Form, Container, Alert, Row, Col, Card } from 'react-bootstrap';
import './Signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            setMessage('Please enter all fields');
            return;
        }
        const hashedPassword = btoa(password);
        const user = { username, password: hashedPassword };

        if (localStorage.getItem(username)) {
            setMessage('Username already taken');
            return;
        }

        localStorage.setItem(username, JSON.stringify(user));
        setMessage('Registration successful. You can now log in.');
    };

    return (
        <div className="background-image">
            <div className="text-content">
                <Container fluid className="hero-section">
                    <Row className="align-items-center">
                        <Col md={6} className="hero-text">
                            <h1 className="fadeIn">REGISTER YOUR</h1>
                            <h1 className="fadeIn">NEW ACCOUNT</h1>
                        </Col>
                        <Col md={6} className="hero-image fadeIn">
                            <img src='/photos/dwa.png' alt='Signup' className="img-fluid" />
                        </Col>
                    </Row>
                </Container>

                <Container className="d-flex justify-content-center align-items-center hero-section" style={{ minHeight: "30vh" }}>
                    <Row className="w-100">
                        <Col md={6} className="mx-auto">
                            {message && <Alert variant="success" style={{ textAlign: 'center', width: '100%' }}>{message}</Alert>}
                            <Card>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="username">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group controlId="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                        </Form.Group>

                                        <Button type="submit" className="w-100 mt-3" style={{ backgroundColor: 'black', color: 'white' }}>Register</Button>
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

export default Signup;
