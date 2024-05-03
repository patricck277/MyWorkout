import React, { useState, useEffect } from 'react';

const Timer = ({ isActive, className }) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    return (
        
        <div className={className}>
            {new Date(time * 1000).toISOString().substr(11, 8)}
        </div>
    );
};

export default Timer;
