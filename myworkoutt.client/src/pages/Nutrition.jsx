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
                            <h1 className="fadeIn">NUTRITION</h1>
                            <h1 className="fadeIn">PLANS</h1>         
                        </Col>
                        <Col md={6} className="hero-image fadeIn">
                            <img src='/photos/home.png' alt='Workout' className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
                <br />
                <p className="lead fadeIn">Welcome to the Nutrition section of My Workout App, where your fitness journey is complemented with tailored nutrition strategies.
                    Dive into our selection of three distinct diet plans designed to match your workout intensity and personal health goals. Each plan is crafted to fuel your body effectively,
                    ensuring you have the energy you need to perform at your best.</p>

                <br />
                <br />
                <br />
                <Container className="text-center my-4 fadeIn">
                    <h2>EXPLORE NUTRITION PLANS TAILORED FOR YOUR FITNESS GOALS</h2>
                </Container>
                <p className="lead fadeIn">Each plan comes with customizable meal suggestions, shopping lists, and nutritional tips to keep you motivated and on track.
                    Choose your plan and start eating smarter today—because when you fuel right, you perform better.</p>

                <Container className="cards-section my-5">
                    <Row className="justify-content-center">
                        <Col md={4} className="mb-4">
                            <Card className="fadeIn">
                                <Card.Img variant="top" src="/photos/basic.jpeg" />
                                <Card.Body>
                                    <Card.Title>Basic Nutrition Plan</Card.Title>
                                    <Card.Text>
                                        Ideal for beginners or those looking to maintain a healthy balance. This plan includes a balanced mix of macronutrients to support regular exercise without overwhelming you with strict dietary restrictions. Start now!
                                        
                                    </Card.Text>
                                    <Button variant="dark" href="/workouts">250€ / Month</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="fadeIn">
                                <Card.Img variant="top" src="/photos/perf.jpeg" />
                                <Card.Body>
                                    <Card.Title>Performance Nutrition Plan</Card.Title>
                                    <Card.Text>
                                        Designed for those who are stepping up their training and need more specialized nutrition. Increase your protein intake, optimize your carb loading, and fine-tune your fat consumption to enhance recovery and muscle growth.
                                    </Card.Text>
                                    <Button variant="dark" href="/workouts">350€ / Month</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="fadeIn">
                                <Card.Img variant="top" src="/photos/elite.jpeg" />
                                <Card.Body>
                                    <Card.Title>Elite Athlete Diet </Card.Title>
                                    <Card.Text>
                                        Tailored for advanced athletes, this plan focuses on micro-nutrient optimizations, advanced supplement strategies, and higher caloric intakes to support intensive training regimes and competition preparation.
                                    </Card.Text>
                                    <Button variant="dark" href="/workouts">500€ / Month</Button>
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
