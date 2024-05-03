import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('currentUser')));

    const login = (userData) => {
        localStorage.setItem('currentUser', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('currentUser');
        setUser(null);
    };
    // Dodane do przesylania danych
    const updateTrainingData = (newData) => {
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));
        if (storedUser && storedUser.username) {
            const key = `${storedUser.username}-exerciseHistory`;
            const existingHistory = JSON.parse(localStorage.getItem(key)) || [];
            const updatedHistory = [...existingHistory, newData];
            localStorage.setItem(key, JSON.stringify(updatedHistory));
            console.log('Updated training data for:', storedUser.username);
        }
    };

    return (
        <UserContext.Provider value={{ user, login, logout, updateTrainingData }}>
            {children}
        </UserContext.Provider>
    );
};
