import logo from './logo.svg';
import './App.css';

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
     <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
        type="text"
        value={name}
        onChange={handleChange}
        />
      </label>
      </form>
    </div>
  );
}
export default App;
