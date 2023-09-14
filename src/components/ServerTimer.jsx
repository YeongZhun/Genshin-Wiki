import React, { useState, useEffect } from 'react';

function ServerResetTimer1({ selectedTimezone }) {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  useEffect(() => {
    // Set up a timer to update the remaining time every second
    const timer = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000); // 1000 milliseconds = 1 second

    // Clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [selectedTimezone]);

  function getRemainingTime() {
    // Calculate the remaining time until the next reset (replace with your logic)
    const now = new Date();
    const resetTime = new Date(now);

    
    if (selectedTimezone === 'Asia') { 
        resetTime.setUTCHours(20); // Replace with the desired reset hour (e.g., 4 AM SGT+8)
        resetTime.setUTCMinutes(0);
        resetTime.setUTCSeconds(0);
    } else if (selectedTimezone === 'Europe') {
        resetTime.setUTCHours(3); 
        resetTime.setUTCMinutes(0);
        resetTime.setUTCSeconds(0);
      } else if (selectedTimezone === 'America') {
        resetTime.setUTCHours(9); 
        resetTime.setUTCMinutes(0);
        resetTime.setUTCSeconds(0);
    } 

    if (now > resetTime) {
      resetTime.setUTCDate(resetTime.getUTCDate() + 1);
    }

    const timeDifference = resetTime - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      // days: days.toString().padStart(2, '0'),
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  }

  return (
    <div className="text-3xl">
      {`${remainingTime.hours}h : ${remainingTime.minutes}m : ${remainingTime.seconds}s`}
    </div>
  );
}

export default ServerResetTimer1;
