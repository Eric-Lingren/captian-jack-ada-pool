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
        <p> An ADA stake pool in honor of the late captian Jack. </p>
        <p> Dedicated to financial freedom and quality of life for all.</p>
        <p> RIP Capt'n Jack</p>
        <div className='about-container'>
          <h3>About Me:</h3>
          <p> I'm an expereinced software engineer who enjoys all technology and loves building cool things.</p>
          <p>You can see more of my other work and find my contact info on 
            <a target='blank' href='https://ericlingren.com'> my portfolio site here.</a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
