import React, { useState } from 'react';

const SetsRecorder = ({ onAddSet }) => {
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddSet({ reps, weight });
        setReps('');
        setWeight('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder="Reps" value={reps} onChange={e => setReps(e.target.value)} />
            <input type="number" placeholder="Weight" value={weight} onChange={e => setWeight(e.target.value)} />
            <button type="submit">Add Set</button>
        </form>
    );
};

export default SetsRecorder;
