import React, {Component} from 'react';
// import logo from './logo.svg';
import {CardList} from './components/card-lists/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: [],
      string: 'Best developer of the year 2025!'
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({monsters: user}))
  }

  render () {
    return (
      <div className="App">
        <header className="App-header"> 
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <input type="search" placeholder="Search monsters" onChange={e => this.setState({searchField: e.target.value})}/>
          <CardList monsters={this.state.monsters}/>
        </header>
      </div>
    )
  }
}

export default App;