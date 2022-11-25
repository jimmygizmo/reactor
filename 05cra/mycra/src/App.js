import logo from './logo.svg';
import './App.css';

// PLAN: Follow react-router quick start, which is a bit different from the CRA
// I am starting with. But I will adapt all code. They use Vite and some other stuff.
// I want to just add minimal React Router to this standard CRA format. Their
// entrypoint is main.jsx. I want to try a slightly different approach just to try it.
// https://reactrouter.com/en/main/start/tutorial


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/test.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
