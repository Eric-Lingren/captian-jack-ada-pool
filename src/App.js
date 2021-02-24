import captianJack from './assets/captn-jack.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Captian Jack's ADA Stake Pool
        </h1>
        <img src={captianJack} className="jack-image-home" alt="captian-jack" />
        <p > An ADA stake pool in honor of the late captian Jack. </p>
        <p> Dedicated to financial freedom and quality of life for all.</p>
        <p> RIP Capt'n Jack</p>
      </header>
    </div>
  );
}

export default App;
