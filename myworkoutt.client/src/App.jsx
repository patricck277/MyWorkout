import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Nutrition from './pages/Nutrition';
import Programs from './pages/Programs';
import Community from './pages/Community';
import Resources from './pages/Resources';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';

const App = () => {
    return (
        <Router>     
            <UserProvider> {/* Opakowanie wszystkiego w UserProvider */}
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/workouts" element={<Workouts />} />
                    <Route path="/nutrition" element={<Nutrition />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/userprofile" element={<UserProfile />} />

                </Routes>
                </Layout>
            </UserProvider>
        </Router>
    );
};

export default App;
