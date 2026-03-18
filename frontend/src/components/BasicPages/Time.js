import React from 'react';
import { useState } from "react" ;

function Time(props) {
  
  let now = new Date().toLocaleTimeString();
  
  let [time, setTime] = useState(now);
  
  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  
  setInterval(updateTime, 1000);
  
  return (
    <div>
      <h1>{time}</h1>
      {/* <button onClick={updateTime}>Get Time</button> */}
    </div>
  );
}

export default Time;