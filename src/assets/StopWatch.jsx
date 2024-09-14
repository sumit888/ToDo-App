import React, { useState, useEffect, useRef } from 'react';

function StopWatch(){
 // State to keep track of the elapsed time in seconds and milliseconds
  const [time, setTime] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  // State to determine if the stopwatch is running
  const [isRunning, setIsRunning] = useState(false);
  // Ref to store the interval ID for clearing it later
  const intervalRef = useRef(null);

  // Effect to start the stopwatch when isRunning is true
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setMilliseconds(prevMilliseconds => {
          if (prevMilliseconds >= 99) {
            setTime(prevTime => prevTime + 1); // Increment time every 100 milliseconds
            return 0;
          }
          return prevMilliseconds + 1;
        });
      }, 10); // Update milliseconds every 10 milliseconds
    } else {
      clearInterval(intervalRef.current); // Clear interval when not running
    }
    
    // Cleanup interval on component unmount or when isRunning changes
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Start button click handler
  const handleStart = () => {
    setIsRunning(true); // Set isRunning to true to start the stopwatch
  };

  // Stop button click handler
  const handleStop = () => {
    setIsRunning(false); // Set isRunning to false to stop the stopwatch
  };

  // Reset button click handler
  const handleReset = () => {
    setIsRunning(false); // Stop the stopwatch
    setTime(0); // Reset time to 0
    setMilliseconds(0); // Reset milliseconds to 0
  };

  // Format time in minutes, seconds, and milliseconds
  const formatTime = (seconds, milliseconds) => {
    const minutes = Math.floor(seconds / 60); // Calculate minutes
    const secs = seconds % 60; // Calculate seconds
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="time-display">{formatTime(time, milliseconds)}</div>
      <div className="button-container">
        <button className="button button-start" onClick={handleStart}>Start</button>
        <button className="button button-stop" onClick={handleStop}>Stop</button>
        <button className="button button-reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;