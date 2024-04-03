import { useEffect, useState } from 'react';
import styles from './App.module.css';

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timerId);
    };
  },[]);

  return (
    <div>
      <h2>현재 시간</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default App;
