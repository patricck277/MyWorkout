import React, { useState } from 'react';
import Timer from '../Workouts/Timer';
import ExerciseSelector from '../Workouts/ExerciseSelector';
import SetsRecorder from '../Workouts/SetsRecorder';
import './Workouts.css';

const TrainingSession = () => {
    const [isActive, setIsActive] = useState(false);
    const [currentExercise, setCurrentExercise] = useState('');
    const [sets, setSets] = useState([]);
    const [exerciseHistory, setExerciseHistory] = useState([]);

    const startTraining = () => setIsActive(true);

    const endTraining = () => {
        setIsActive(false);

        // Przygotowanie danych do zapisu
        const trainingData = {
            date: new Date().toISOString(),
            exercises: exerciseHistory,
        };

        // Dodaj aktualne ćwiczenie do historii, jeśli nie jest puste
        if (currentExercise) {
            addExerciseToHistory(currentExercise, sets);
            setCurrentExercise('');
            setSets([]);
        }

        // Zapisz dane treningu w localStorage
        const storedTrainings = JSON.parse(localStorage.getItem('trainings')) || [];
        storedTrainings.push(trainingData);
        localStorage.setItem('trainings', JSON.stringify(storedTrainings));

        // Opcjonalnie: Przenieś użytkownika do strony profilu
       // navigate('/profile');
    };

    const handleExerciseSelect = exercise => {
        if (currentExercise) {
            addExerciseToHistory(currentExercise, sets);
        }
        setCurrentExercise(exercise);
        setSets([]); // Resetuj serie przy zmianie ćwiczenia
    };

    const addSet = set => {
        setSets([...sets, set]);
    };

    const addExerciseToHistory = (exercise, sets) => {
        setExerciseHistory([...exerciseHistory, { exercise, sets }]);
    };



    return (
        <div className="background-image training-session-container">
            <div className="text-content">
                <div className="training-form">
                <h1>Training Session</h1>
                {!isActive && <button onClick={startTraining}>Start Training</button>}
                    <Timer isActive={isActive} className="timer-display" />
                {isActive && (
                    <>
                        <ExerciseSelector onExerciseSelect={handleExerciseSelect} />
                        {currentExercise && (
                            <>
                                <SetsRecorder onAddSet={addSet} />
                                <button onClick={() => {
                                    addExerciseToHistory(currentExercise, sets); // Zapisz ćwiczenie przed zakończeniem
                                    setCurrentExercise('');
                                    setSets([]);
                                }}>End Current Exercise</button>
                            </>
                        )}
                        <button onClick={endTraining}>End Training</button>
                        {exerciseHistory.length > 0 && (
                                <div className="training-summary">
                                    <h3>Training Summary:</h3>
                                    {exerciseHistory.map((item, index) => (
                                        <div key={index} className="summary-item">
                                            <h4>{item.exercise}</h4>
                                            <ul>
                                                {item.sets.map((set, idx) => (
                                                    <li key={idx}>Reps: {set.reps}, Weight: {set.weight}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                        )}
                    </>
                )}
                </div>
            </div>
        </div>
    );
};

export default TrainingSession;
