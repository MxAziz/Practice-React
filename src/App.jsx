import { useState } from 'react';
import './App.css'
import BookStore from './components/book/BookStore';

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

  // book store
  const books = [
    { id: 1, price: 10 },
    { id: 2, price: 20 },
    { id: 3, price: 30 },
    { id: 4, price: 40 },
  ];

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

      <hr />

      <h1>Book Store App</h1>
      <BookStore books={books}></BookStore>
    </>
  );
}

export default App
