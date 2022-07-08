import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';


function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className='app'>
      { isVisible && <Counter /> }
      <br/>
      <button onClick={() => setIsVisible(!isVisible)}>Toogle Counter</button>
   </div>

    
  );
}

export default App;
