
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setname] = useState("")
  const [greeting,setGreeting]=useState("")
const handleChange = (e) =>
{
setname(e.target.value)
}

const handleSubmit = (event) =>
{
  event.preventDefault()
  setGreeting(`Hello, ${name}!`)
}

  return (
    <div className="App">
     <h2>Hey!!! Greeting</h2>
     <form onSubmit={handleSubmit} datatestid="label">
      <label data-testid="label">
        Enter your name:
        <input
        type="text"
        value={name}
        onChange={handleChange}
        />
      </label>
      <button data-testid="buttonElement"
      type="submit"
      >
        Say Hello
      </button>
      </form>
      {greeting ? <h2>{greeting}</h2>:<></>}
    </div>
  );
}
export default App;
