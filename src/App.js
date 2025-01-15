import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-lists/card-list.component'

class App extends Component {
  constructor() {
    super()

    this.state = {
      data: [],
      string: 'Hello Samuel Odusanwo'
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({data}))
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Samuel Odusanwo, we are about to start a big project called TesemaLimited</p>
          <button onClick={() => this.setState({string: "I'm Great"})}>Click Me</button>
          <p>{this.state.string}</p>
          <CardList>
            {
              this.state.data.map(
                user => <h1 key={user.id}>{user.name}</h1>
              )
            }
          </CardList>
        </header>
      </div>
    )
  }
}

export default App;