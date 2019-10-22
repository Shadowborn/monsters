import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component'

import './App.css';

class App extends Component {
  constructor() {
    super(); //Super calls the constructor method, on the component class and gives us access to this.state

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state; //destructuring, pulling properties off of this.state, and setting them to constants called monsters and searchField
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App'>
        <input 
          type='search' 
          placeholder='search monsters' 
          onChange={e => this.setState({ searchField: e.target.value })}/>

        <CardList monsters={filteredMonsters}/>
        
      </div>
    );
  }
}

export default App;
