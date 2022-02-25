import logo from "./Perreo&code.2.gif";
import instagram from "./instagram.png";
import twitter from "./twitter.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <small>Página en construcción...</small>
        <div className="App-link-container">
        <a
          className="App-link"
          href="https://www.instagram.com/perreoandcode/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" className="App-instagram" />
        </a>
        <a
          className="App-link"
          href="https://twitter.com/perreoandcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" className="App-twitter" />
        </a>
        </div>
      </header>
    </div>
  );
}

export default App;
