import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  const resetValue = () => {
    setCounter(0)
  }

  return (
    <>
      <h1>React counter App</h1>
      <h3>Trigger Counter: {counter} </h3>
      <div style={{}}>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
      <br />
      <button onClick={resetValue} style={{}}>Reset</button>
    </>
  );
}

export default App
