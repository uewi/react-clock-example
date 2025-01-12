import React, { useState, useEffect } from 'react';

function AnalogClock() {
  const [time, setTime] = useState(new Date());
  const [hourAngle, setHourAngle] = useState(0);
  const [minuteAngle, setMinuteAngle] = useState(0);
  const [secondAngle, setSecondAngle] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const currentHour = time.getHours() % 12;
    const currentMinute = time.getMinutes();
    const currentSecond = time.getSeconds();

    const newHourAngle =
      ((currentHour + currentMinute / 60 + currentSecond / 3600) / 12) * 360;
    const newMinuteAngle = ((currentMinute + currentSecond / 60) / 60) * 360;
    const newSecondAngle = (currentSecond / 60) * 360;

    setHourAngle(newHourAngle);
    setMinuteAngle(newMinuteAngle);
    setSecondAngle(newSecondAngle);
  }, [time]);

  return (
    <div className="analog-clock-container">
      <div className="analog-clock">
        <div className="clock">
          <div
            className="hand hour"
            style={{
              transform: `translate(-50%, -100%) rotate(${hourAngle}deg)`,
            }}
          ></div>
          <div
            className="hand minute"
            style={{
              transform: `translate(-50%, -100%) rotate(${minuteAngle}deg)`,
            }}
          ></div>
          <div
            className="hand second"
            style={{
              transform: `translate(-50%, -100%) rotate(${secondAngle}deg)`,
            }}
          ></div>
        </div>
        <div className="center-point"></div>
      </div>
    </div>
  );
}

export default AnalogClock;
