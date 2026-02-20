import './App.css'

function App() {

  let count = 10;

  const addValue = () => {
    console.log('Add button clicked', Math.random())
  }

  return (
    <>
      <h1>React counter App</h1>
      <h3>Trigger Counter: {count} </h3>
      <div style={{}}>
        <button onClick={addValue}>Add Value</button>
        <button>Remove Value</button>
      </div>
    </>
  );
}

export default App
