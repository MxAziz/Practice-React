import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    console.log('Add button clicked', counter)
    setCounter(counter + 1);
  }

  const removeValue = () => {
    console.log('remove button clicked', counter)
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>React counter App</h1>
      <h3>Trigger Counter: {counter} </h3>
      <div style={{}}>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  );
}

export default App
