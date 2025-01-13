import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super ();

    this.state = {
      monsters : [
        {
          name: 'Frankenstein',
          id: 'mon1'
        }, 
        {
          name: 'Dracula',
          id: 'mon2'
        },
        {
          name: 'Zombie',
          id: 'mon3'
        }
      ]
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Samuel, we are about to start a big project called TesemaLimited</p>

          {
            this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
          }
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Samuel, we are about to start a big project called TesemaLimited</p>

          {
            this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
          }
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Samuel, we are about to start a big project called TesemaLimited</p>

          {
            this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
          }
        </header>
      </div>
    )
  }
}

export default App;
