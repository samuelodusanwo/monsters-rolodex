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

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({monsters: user}))
  }

  handleChange(e) {
    this.setState({searchField: e.target.value})
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
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h4>Hello Samuel, We are about to start a big Project for the year</h4>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'And the best Hacker of the year 2025!'})}>Click me</button>
          <h1 className='main_heading'>Monster Rolodex</h1>
          <SearchBox
            placeholder='Search monsters'
            handleChange={this.handleChange}
          />
          <CardList monsters={filteredMonsters}/>
        </header>
      </div>
    )
  }
}

export default App;