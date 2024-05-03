import React, { useState, useEffect } from 'react';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [activities, setActivities] = useState([]); // State to store user activities
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
                    <div>
                        <h1>User Profile</h1>
                        <p>Username: {user.username}</p>
                        <h2>Training History</h2>
                        {trainings.length > 0 ? (
                            <ul>
                                {trainings.map((training, index) => (
                                    <li key={index}>
                                        <h3>Date: {training.date}</h3>
                                        {training.exercises.map((exercise, exIndex) => (
                                            <div key={exIndex}>
                                                <h4>{exercise.exercise}</h4>
                                                <ul>
                                                    {exercise.sets.map((set, setIdx) => (
                                                        <li key={setIdx}>Reps: {set.reps}, Weight: {set.weight}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </li>
                                ))}
                            </ul>
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
