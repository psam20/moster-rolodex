import React, {Component} from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
    // Super method calls the constructor method on the Component class 
    super();
    // now our App gets access to the state property after calling Super
    this.state ={
      string : "Hello kishan",
      monster : [
        {
          name : "kishan",
          id : "1"
        },{
          name : "zombie",
          id :"2"
        }
      ]
    }
      
    
  }
  
  render() {
    return (
      <div className="App">
      
           <p>{this.state.string}</p>
           <p>{this.state.string}</p>

           <button onClick={() => {this.setState({string :" hello gupta ji "})}}>CLick me</button>
        
        {
          this.state.monster.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
          ) 
          
        )
        }
      
      </div>
    );
  }
}
export default App;
