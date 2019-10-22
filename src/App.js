import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
  constructor() {
    super(); //Super calls the constructor method, on the component class and gives us access to this.state

    this.state = {
      monsters: [],
      searchField: ''
    }
    
    // this.handleChange = this.handleChange.bind(this)
    // ^^ this would only need to be here if my handleChange method is not an arrow function, since arrow functions automatically bind this to the class component. (Lexical scoping, binding "this" to where it was defined in the first place)

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state; //destructuring, pulling properties off of this.state, and setting them to constants called monsters and searchField
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App'>
        <h1>Monsters</h1>
        <SearchBox
          placeholder={ 'search..' }
          handleChange={ this.handleChange }
        />
        <CardList monsters={filteredMonsters}/>
        
      </div>
    );
  }
}

export default App;
