// Dev: @skywalkerSam
// Purpose: Clock
// Date: 12023.12.21.1712

/* TODOs:
- Show time acc. to IP origin

*/

import { useState, useEffect } from "react";
import styled from 'styled-components';
import 'tachyons';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  `;

const App = () => {
  let currentTime = new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZoneName: 'short' });
  let currentTimezone = new Date().toLocaleDateString([], { timeZoneName: 'long' }).slice(12, 31);
  let currentDay = new Date().toLocaleDateString([], { weekday: 'long' });
  let currentDate = new Date().toISOString().slice(0, 10) + ' ';

  // console.log(currentTime);
  // console.log(currentDay);
  // console.log(currentTimezone);
  console.log(new Date());

  const [cTime, setTime] = useState(currentTime);
  const [cTimezone, setTimezone] = useState(currentTimezone);
  const [cDay, setDay] = useState(currentDay);
  const [cDate, setDate] = useState(currentDate);

  const updateTime = () => {
    let newTime = new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    setTime(newTime);
  };

  const updateTimezone = () => {
    let newTimezone = new Date().toLocaleDateString([], { timeZoneName: 'short' }).slice(12, 15);
    setTimezone(newTimezone);
  };

  const updateDay = () => {
    let newDay = new Date().toLocaleDateString([], { weekday: 'short' });
    setDay(newDay);
  };

  const updateDate = () => {
    let newDate = new Date().toISOString().slice(0, 10) + ' ';
    setDate(newDate);
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(updateTimezone, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(updateDay, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(updateDate, 1000);    //86400000
    return () => clearInterval(interval);
  }, []);

  return (
    <AppContainer>
      <div className="red hover-green">
        <h1>{cTime}</h1>
        {/* <h4>{cDay}</h4> */}
        {/* <h5>{cDate}</h5> */}
        {/* <h6>{cTimezone}</h6> */}
      </div>
    </AppContainer>
  );
};

export default App;
