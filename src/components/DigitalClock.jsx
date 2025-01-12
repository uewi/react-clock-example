import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function displayDigitalClock() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const m = hours > 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${m}`;
  }

  function padZero(number) {
    return (number < 10 ? '0' : '') + number;
  }

  return (
    <div className="digital-clock-container">
      <div className="digital-clock">
        <span>{displayDigitalClock()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
