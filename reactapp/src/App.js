import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h2>Hey!!! Greeting</h2>
     <form>
      <label>
        Enter your name:
        <input
        type="text"
        onChange={ha}
        />
      </label>
      </form>
    </div>
  );
}

export default App;
