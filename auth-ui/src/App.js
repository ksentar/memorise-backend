import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import {Button} from 'antd'
import Email from './Email.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <Button   onClick={Login}>Login with Google</Button>
          <Button   onClick={Email}>Login with Email</Button>
      </header>
    </div>
  );
}

export default App;
