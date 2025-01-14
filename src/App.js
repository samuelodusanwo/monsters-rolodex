import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super();
    

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
      ],
      string : 'Samuel the Tech Lord'
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Samuel Odusanwo, we are about to start a big project called TesemaLimited</p>

          <button onClick={() => this.setState({string: 'I will be Great'})}>Click Me</button>
            {
              this.state.monsters.map(
                monster => <h1 key={monster.id}>{monster.name}</h1>
              )
            }
            {
              this.state.monsters.map(
                monster => <h1 key={monster.id}>{monster.name}</h1>
              )
            }
            {
              this.state.monsters.map(
                monster => <h1 key={monster.id}>{monster.name}</h1>
              )
            }
          <p>{this.state.string}</p>
        </header>
      </div>
    )
  }
}

export default App;
