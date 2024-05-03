import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light mt-4 py-3">
            <Container className="text-center">
                My Workout App - {new Date().getFullYear()} - Patryk Norek
            </Container>
        </footer>
    );
};

export default Footer;
