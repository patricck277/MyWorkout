// Counter.jsx

import React, { useState, useEffect } from 'react';

const Counter = ({ count, label }) => {
    const [displayCount, setDisplayCount] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setDisplayCount((prevCount) => {
                const increment = count > 100 ? Math.ceil(count / 100) : 1;
                if (prevCount + increment < count) {
                    return prevCount + increment;
                }
                clearInterval(interval);
                return count;
            });
        }, 20);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <div className="counter">
            <h3>{displayCount.toLocaleString()}</h3>
            <p>{label}</p>
        </div>
    );
};

export default Counter;
