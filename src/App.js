import React, {Component} from 'react';
// import logo from './logo.svg';
import {CardList} from './components/card-lists/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      string: 'Best developer of the year 2025!'
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({monsters: user}))
  }

  render () {
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <header className="App-header"> 
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          {/* <input type="search" placeholder="Search monsters" onChange={e => this.setState({searchField: e.target.value})}/> */}
          <SearchBox
            placeholder='Search monsters'
            handleChange={e => this.setState({searchField: e.target.value})}
          />
          <CardList monsters={filteredMonsters}/>
        </header>
      </div>
    )
  }
}

export default App;