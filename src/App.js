import React, { useState, useEffect, useRef} from 'react';
import axios from 'axios';

import "tailwindcss/tailwind.css";

//components
import Dashboard from './components/dashboard/index';

function App() {

  const [ btn, setBtn ] = useState(true)
  const [ seconds, setSeconds ] = useState(0)
  const [ data, setData ] = useState([])
  const [ avgYears, setAvgYears ] = useState(0)
  const timer = useRef(null);

  const startStopTimer = () => {
    if (!timer.current) {
      timer.current = setInterval(() => setSeconds(currentTime => currentTime + 1), 1000);
    } else {
      clearInterval(timer.current);
      timer.current = null;
    }
  }

  const averageYear = (arr) => {
    return arr.reduce((a,b) => a + b.dob.age, 0) / arr.length
  }

  const handleClick = () => {
    setBtn(!btn)
    startStopTimer()
  }

  useEffect(() => {

    const getData = () => {
      return axios.get('https://randomuser.me/api/?results=10')
      .then((response) => {
        setData(response.data.results)
        setAvgYears(averageYear(response.data.results))
        setSeconds(0)
      })
    }

    const checkTimeToGetData = () => {
      if(seconds === 10) getData()
    }

    checkTimeToGetData()

  }, [seconds])

  return (
    <div className="App">
      <Dashboard 
        seconds={seconds} 
        btn={btn}
        data={data}
        avgYears={avgYears}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
