import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'mAX',age: 28},
      {name:'Manu',age: 29},
      {name:'Stephanie',age: 26}
    ]
    
     
  }
  switchNameHandler = () =>{
   // console.log('Was clicked!');
   // this.state.persons[0].name="kris wu";
   this.setState({
    persons: [
      {name:'Jianyi',age: 28},
      {name:'Manu',age: 29},
      {name:'Stephanie',age: 21}
    ]
   })
  }
  render() {
    return (
      <div className="App">
       <h1>Hi,I'm a React App</h1>
       <p>This is really working!</p>
       <button onClick={this.switchNameHandler}>Switch Name!</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: basket</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
      );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi,I m react!')
    //);
  }
}

export default App;
