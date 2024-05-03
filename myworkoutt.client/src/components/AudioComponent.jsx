import React, { useRef, useEffect } from 'react';

const AudioComponent = () => {
    const audioRef = useRef(null);

    useEffect(() => {
  
        if (audioRef.current) {
            audioRef.current.play()
                .catch(error => console.log('Error playing audio:', error)); 
        }
    }, []); // 

    return <audio ref={audioRef} src="/path/to/your/audio/file.mp3" autoPlay />;
};

export default AudioComponent;
