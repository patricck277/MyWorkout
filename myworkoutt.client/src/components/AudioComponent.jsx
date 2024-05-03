import React, { useRef, useEffect } from 'react';

const AudioComponent = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        // Sprawdzenie czy audioRef.current nie jest null
        if (audioRef.current) {
            audioRef.current.play()
                .catch(error => console.log('Error playing audio:', error)); // obsługa błędu, gdyby nie udało się odtworzyć dźwięku
        }
    }, []); // Pusty array zależności oznacza, że useEffect wykona się tylko raz po zamontowaniu komponentu

    return <audio ref={audioRef} src="/path/to/your/audio/file.mp3" autoPlay />;
};

export default AudioComponent;
