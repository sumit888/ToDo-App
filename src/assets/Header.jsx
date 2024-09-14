import React, { useEffect, useState } from 'react';

// Header component
const Header = () => {
  // State to keep track of the current date and time
  const [dateTime, setDateTime] = useState(new Date());

  // Effect to update the date and time every second
  useEffect(() => {
    const timerId = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    // Cleanup timer on component unmount
    return () => clearInterval(timerId);
  }, []);

  // Format date and time as a string
  const formatDateTime = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <header className="header-container">
      <h1 className="header-title">TODOs FOR</h1>
      <div className="date-time-display">{formatDateTime(dateTime)}</div>
    </header>
  );
};

export default Header;
