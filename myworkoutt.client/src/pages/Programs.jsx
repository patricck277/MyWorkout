import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Counter from '../components/Counter';
import './Home.css';




const Home = () => {
    return (
        <div className="background-image">
            <div className="text-content">
                <Container fluid className="hero-section">
                    <Row className="align-items-center">
                        <Col md={6} className="hero-text">
                            <h1 className="fadeIn">TRAINING</h1>
                            <h1 className="fadeIn">PROGRAMS</h1>
                        </Col>
                        <Col md={6} className="hero-image fadeIn">
                            <img src='/photos/home.png' alt='Workout' className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
                <br />
                <p className="lead fadeIn">Welcome to the Programs section of My Workout App, where your fitness aspirations meet structured, effective training strategies.
                    Browse our selection of three meticulously designed training programs, each tailored to cater to different levels of fitness expertise and goals.
                    These programs are crafted to maximize your physical potential, ensuring you achieve and even surpass your fitness aspirations.</p>
                <br />
                <br />
                <br />
                <Container className="text-center my-4 fadeIn">
                    <h2>EXPLORE TRAINING PROGRAMS DESIGNED TO ELEVATE YOUR FITNESS</h2>
                </Container>
                <p className="lead fadeIn">Each program comes equipped with detailed workout schedules, instructional videos, and tips to ensure proper form and safety.
                    Choose your path and start your transformation today—because great achievements begin with a solid plan.</p>
                <Container className="cards-section my-5">
                    <Row className="justify-content-center">
                        <Col md={4} className="mb-4">
                            <Card className="fadeIn">
                                <Card.Img variant="top" src="/photos/fund.jpeg" />
                                <Card.Body>
                                    <Card.Title>Foundation Fitness Program</Card.Title>
                                    <Card.Text>
                                        Perfect for beginners or those returning to exercise after a break. This program focuses on building a strong fitness foundation with exercises that enhance your overall strength, stability, and endurance.

                                    </Card.Text>
                                    <Button variant="dark" href="/workouts">100€ / Month</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="fadeIn">
                                <Card.Img variant="top" src="/photos/total.jpeg" />
                                <Card.Body>
                                    <Card.Title>Total Body Transformation Program</Card.Title>
                                    <Card.Text>
                                        Ideal for those ready to take their fitness to the next level. This comprehensive program targets all major muscle groups with a blend of strength training, cardio workouts, and flexibility exercises to reshape your body and boost your fitness.
                                    </Card.Text>
                                    <Button variant="dark" href="/workouts">200€ / Month</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="fadeIn">
                                <Card.Img variant="top" src="/photos/peak.jpeg" />
                                <Card.Body>
                                    <Card.Title>Peak Performance Program</Card.Title>
                                    <Card.Text>
                                        Designed for seasoned athletes or anyone aiming for peak physical condition. This program intensifies your training with advanced techniques and challenging workouts that focus on optimizing performance, increasing speed and strength.
                                    </Card.Text>
                                    <Button variant="dark" href="/workouts">300€ / Month</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>


                {/* Reszta treści */}

            </div>
        </div>
    );
};

export default Home;
