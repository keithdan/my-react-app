import logo from './logo.svg';
import './App.css';
import ApiData from './components/ApiData';
import Form from './components/Form';

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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1 }}>
            <ApiData />
          </div>
          <div style={{ flex: 1 }}>
            <Form />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
