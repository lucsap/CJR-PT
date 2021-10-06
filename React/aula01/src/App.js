import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Eu quero mudar de país</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Agora eu sou um Deus do universo, ajoelhem aos meus pés!
        </p>
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
