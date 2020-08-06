import React, { useState, useEffect } from "react";

function Clock() {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(new Date());
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let day = "AM";
  if (hr > 12) {
    day = "PM";
    hr = hr - 12;
  }
  if (hr === 0) {
    hr = 12;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (hr < 10) {
    hr = "0" + hr;
  }

  useEffect(() => {
    const countTime = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(countTime);
  }, [start]);
  return (
    <div className="digital-clock" onLoad={() => setStart(true)}>
      <div className="display">
        <div className="time">{`${hr}:${min}:${sec}`}</div>
        <div className="day">{day}</div>
      </div>
    </div>
  );
}

export default Clock;
