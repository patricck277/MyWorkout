import React from 'react';

const ExerciseSelector = ({ onExerciseSelect }) => {
    const exercises = ["DEADLIFT", "SQUAT", "BENCH PRESS"];

    return (
        <select onChange={e => onExerciseSelect(e.target.value)}>
            {exercises.map(exercise => (
                <option key={exercise} value={exercise}>{exercise}</option>
            ))}
        </select>
    );
};

export default ExerciseSelector;
