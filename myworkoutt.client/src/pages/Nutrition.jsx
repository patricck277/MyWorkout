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
                            <h1 className="fadeIn">SHAPE YOUR</h1>
                            <h1 className="fadeIn">IDEAL BODY WITH</h1>
                            <h1 className="fadeIn">MY WORKOUT APP</h1>
                        </Col>
                        <Col md={6} className="hero-image fadeIn">
                            <img src='/photos/home.png' alt='Workout' className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
                <br />
                <p className="lead fadeIn">Discover the transformative power of fitness with My Workout App, your personal hub for workout planning and performance tracking.
                    Customize your fitness journey with adaptive training plans, log exercises effortlessly, and get insights to stay motivated.</p>
                <p className="lead fadeIn">Dive into our curated collection of workout programs or elevate your routine with private coaching from top trainers.
                    Embrace the support of a community that’s just as dedicated as you are.</p>
                <p className="lead fadeIn">Join us and start shaping your ideal body today with My Workout App, where your fitness goals are just a tap away.</p>
                <br />
                <br />
                <br />
                <Container className="my-4 stats-section fadeIn">
                    <Row>
                        <Col>
                            <Container className="stats-section">
                                <Row className="text-center">
                                    <Col md={6}>
                                        <Counter count={5856} label="MEMBERS" />
                                    </Col>
                                    <Col md={6}>
                                        <Counter count={35} label="PROGRAMS" />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
                <br />
                <Container className="text-center my-4 fadeIn">
                    <h2>CHECK OUR BEST POSSIBILITIES</h2>
                </Container>
                <p className="lead fadeIn">Unlock your potential with My Workout App: Tailored fitness programs, seamless workout tracking, and personalized nutrition plans all converge to guide you on the path to your best self.</p>

                <Container className="cards-section my-5">
                    <Row className="justify-content-center">
                        <Col md={4} className="mb-4">
                            <Card className="fadeIn">
                                <Card.Img variant="top" src="/photos/Tra.jpeg" />
                                <Card.Body>
                                    <Card.Title>Track Your Workouts</Card.Title>
                                    <Card.Text>
                                        Monitor your progress with precision. Our intuitive tracking system makes it easy to log workouts, see gains, and keep pushing your limits. Experience the satisfaction of every milestone achieved.
                                    </Card.Text>
                                    <Button variant="dark" href="/workouts">Get Started</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="fadeIn">
                                <Card.Img variant="top" src="/photos/Pro.jpeg" />
                                <Card.Body>
                                    <Card.Title>Programs</Card.Title>
                                    <Card.Text>
                                        Dive into a diverse world of fitness with our custom programs, tailored to fit every goal and lifestyle. Whether you’re a beginner or a seasoned athlete, check it.
                                    </Card.Text>
                                    <Button variant="dark" href="/workouts">Get Started</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="fadeIn">
                                <Card.Img variant="top" src="/photos/Nut.jpeg" />
                                <Card.Body>
                                    <Card.Title>Nutrition</Card.Title>
                                    <Card.Text>
                                        Fuel your fitness journey with our expert nutrition guidance. Transform your eating habits with personalized meal plans that complement your workout routine.
                                    </Card.Text>
                                    <Button variant="dark" href="/workouts">Get Started</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
                <br />
                <Container className="text-center my-4 fadeIn">
                    <h2>COOPERATION WITH YOUR PERSONAL TRAINER</h2>
                </Container>
                <p className="lead fadeIn">Elevate your fitness journey with personalized coaching tailored to your goals. Choose from Basic Training for fundamentals, Medium Training + Nutrition for enhanced performance, or Hard Training + Nutrition + Supplementation for ultimate peak condition. Each plan is designed to meet your unique fitness needs.</p>
                <Container className="cards-section my-5">
                    <Row className="justify-content-center">
                        <Col md={4} className="mb-4">
                            <Card className="fadeIn">
                                <Card.Img variant="top" src="/photos/Beg.jpeg" />
                                <Card.Body>
                                    <Card.Title>Training</Card.Title>
                                    <Card.Text>
                                        Ideal for beginners, this plan focuses on establishing a solid fitness foundation with customized workouts tailored to your capabilities and goals.
                                    </Card.Text>
                                    <Button variant="dark" href="/workouts">Get Started</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="fadeIn">
                                <Card.Img variant="top" src="/photos/Tr_Nut.jpeg" />
                                <Card.Body>
                                    <Card.Title>Training + Nutrition</Card.Title>
                                    <Card.Text>
                                        Elevate your routine with targeted workouts and a nutrition plan designed to optimize your performance and recovery.
                                    </Card.Text>
                                    <Button variant="dark" href="/workouts">Get Started</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="fadeIn">
                                <Card.Img variant="top" src="/photos/Tr_Nut_Sup.jpeg" />
                                <Card.Body>
                                    <Card.Title>Training + Nutrition + Supplementation</Card.Title>
                                    <Card.Text>
                                        For those seeking peak performance, this comprehensive package includes intensive workouts, a detailed nutrition strategy, and supplementation.
                                    </Card.Text>
                                    <Button variant="dark" href="/workouts">Get Started</Button>
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
