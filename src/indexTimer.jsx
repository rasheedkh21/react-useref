import React, { useRef, useState } from "react";

const UseRefProjects = () => {
  let click = useRef(0);

  const [time, setTime] = useState(null);
  const [now, setNow] = useState(null);
  const [laps, setLaps] = useState([]);
  const timer = useRef(null);

  function HandleClick() {
    click.current = click.current + 1;
    alert(`you clicked ` + click.current + ` times`);
  }
  function handleStart() {
    setTime(Date.now());
    setNow(Date.now());

    clearInterval(timer.current);

    timer.current = setInterval(() => {
      setNow(Date.now());
    }, 1000);
  }
  function handleStop() {
    clearInterval(timer.current);
  }
  let starTimer = 0;

  if (time != null && now != null) {
    starTimer = (now - time) / 1000;
  }
  function handleLap() {
    if (time !== null && now !== null) {
      const lapTime = (now - time) / 1000;
      setLaps([...laps, lapTime.toFixed(1)]);
      setTime(now);
    }
  }
  return (
    <div>
      <button onClick={HandleClick}>click this</button>
      <div>
        <p>Time:{starTimer.toFixed(1)}</p>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleLap}>lap</button>
        <div>
          <h3>laps:</h3>
          <ul>
            {laps.map((lap, index) => (
              <li key={index}>
                Lap {index + 1}: {lap} seconds{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseRefProjects;
