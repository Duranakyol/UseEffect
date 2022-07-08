import React from 'react'
import { useState, useEffect } from 'react'; 

function Counter() {
    const [number, setNumber] = useState(0);

  const onClickNumber = () => {
    setNumber(number + 1);
  }


  useEffect(() => {
      console.log('Component mount edildi!');
      
      const interval = setInterval(() => {
          setNumber((n) => n + 1)
      }, 1000);

      return () => clearInterval(interval);
  }, []);
    
    useEffect(() => {
        console.log("Number state güncellendi!");
    }, [number]);

  return (
    <div>
    <h1>{number}</h1>
    <button onClick={onClickNumber}>CLICK</button>

          <br />
          
  </div>
  )
}

export default Counter