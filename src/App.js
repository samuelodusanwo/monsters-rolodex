import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super ();

    this.state = {
      string: 'You are a Great Man Samuel',
      manifestation: 'You will succed in all you do'
    }
  }

  render () {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Samuel, We are about to start a big project called tesema_Limited
        </p>
        <p>{this.state.string}</p>
        <p>{this.state.manifestation}</p>
        <button onClick={(e) => this.setState({string: 'Thus said the Lord, The Plans of the evil shall not stand neither shall it come to pass', manifestation: 'Your words are lamp to guild my feet to the right direction and light to for my Path'})}>Click Me</button>
        <h1>
          List of tesemaLimited names
        </h1>
        <ol>
          <li>Tesema-Hub</li>
          <li>Tesema-Tech</li>
          <li>Tesema-Saloon</li>
          <li>Tesema-Catery</li>
          <li>Tesema-Housings</li>
        </ol>
        <p>
          My first React script
        </p>
        <p>
          Seen this brr?
        </p>
        <h1>
          Subtitle
        </h1>
        <h2>Jesus you are LORD</h2>
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
    )
  }
}

export default App;
