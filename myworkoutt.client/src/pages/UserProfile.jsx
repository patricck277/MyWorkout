import React, { useState, useEffect } from 'react';
import './UserProfile.css';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [trainings, setTrainings] = useState([]); // State to store training history

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));
        if (storedUser) {
            setUser(storedUser);
        } else {
            console.log("Please log in to view this page.");
        }

        // Load training history from localStorage
        const storedTrainings = JSON.parse(localStorage.getItem('trainings')) || [];
        setTrainings(storedTrainings);

    }, []);

    return (
        <div className="background-image">
            <div className="text-content">
                {user ? (
                    <div className="user-profile">
                        <h1>User Profile</h1>
                        <p>Username: {user.username}</p>
                        <h2>Training History</h2>
                        {trainings.length > 0 ? (
                            <div className="training-history">
                                {trainings.map((training, index) => (
                                    <div key={index} className="training-session">
                                        <h3>Date: {new Date(training.date).toLocaleString('pl-PL', { timeZone: 'UTC', dateStyle: 'short', timeStyle: 'short' })}</h3>
                                        {training.exercises.map((exercise, exIndex) => (
                                            <div key={exIndex} className="exercise-detail">
                                                <h4>{exercise.exercise}</h4>
                                                <div>
                                                    {exercise.sets.map((set, setIdx) => (
                                                        <span key={setIdx}>Reps: {set.reps}, Weight: {set.weight} | </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No training history.</p>
                        )}
                    </div>
                ) : (
                    <p>Please log in to view this page.</p>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
