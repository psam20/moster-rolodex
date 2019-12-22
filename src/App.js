import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(){
    // Super method calls the constructor method on the Component class 
    super();
    // now our App gets access to the state property after calling Super
    this.state ={
      string : "Hello kishan"
    }
      
    
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
           <p>{this.state.string}</p>
           <p>{this.state.string}</p>

           <button onClick={() => {this.setState({string :" hello gupta ji "})}}>CLick me</button>
        
        </header>
      </div>
    );
  }
}
export default App;
