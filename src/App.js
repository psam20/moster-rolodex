import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import {Search} from './components/SearchBox/search.component'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
     
      monsters : [],
      SearchField : ''
    };

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monsters : users }));
  }
 render(){
   const {monsters , SearchField} = this.state;
   const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(SearchField.toLowerCase())
    );
   return(
     <div className="App">
       <h1> Monsters Rolodex</h1>
        <Search placeholder="search monsters" handleChange={e => this.setState({SearchField :e.target.value})} />
         
          
          <CardList monsters={filteredMonsters} />
     </div>
   )
 }
}

export default App;
