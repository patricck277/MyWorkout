import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Layout = ({ children }) => {
    return (
        <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
            <Header />
            <main className="flex-shrink-0">
                <Container>{children}</Container>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
