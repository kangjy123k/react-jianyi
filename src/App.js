import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import Radium ,{StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons: [
      {id:'abc',name:'mAX',age: 28},
      {id:'def',name:'Manu',age: 29},
      {id:'ghi',name:'Stephanie',age: 26},
      
    ],
    
      otherState: 'some other value',
      showPersons: false
    
     
  }
  

  togglePersonsHandler = ()=>{
    const doesShow = this.state.showPersons;
 	 
     this.setState({	     
       showPersons: !doesShow	      
     });	    
   }	   
    
  
  nameChangedHandler=(event,id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
     const person = {
       ...this.state.persons[personIndex],
       name:event.target.value
     };
     const persons = [...this.state.persons];
     persons[personIndex] = person;
     this.setState({persons});
  }

  deletePersonHandler = (personIndex)=>{
    const persons =[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons: persons
    })
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer',
      // ':hover':{
      //   backgroundColor:'lightgreen',
      //   color:'black'
      // }
    };

    let persons = null;
    if(this.state.showPersons){
      persons =(
        <div>
         {/* <Person 
           name={this.state.persons[0].name} 
           age={this.state.persons[0].age} />
       
         <Person 
           name={this.state.persons[1].name} 
           age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,'fuck')} 
           changed={this.nameChangedHandler}>My Hobbies: basket</Person>
       
       <Person
        name={this.state.persons[2].name}
         age={this.state.persons[2].age}/> */
         this.state.persons.map((person,index)=>{
           return <Person
            click={()=>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event)=>this.nameChangedHandler(event,person.id)} />          
            })}

      </div>
      );
      style.backgroundColor = 'red';
      // style[':hover']={
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    const classes = [];
    if(this.state.persons.length<=2){
      classes.push('red');
    }

    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    return (
      //<StyleRoot>
      <div className="App">
       <h1>Hi,I'm a React App</h1>
       <p className={classes.join(' ')}>This is really working!</p>
       <button 
       style={style}
       onClick={this.togglePersonsHandler}>Toggle Persons</button>
       {
        persons
       }
     </div>
     //</StyleRoot>
      );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi,I m react!')
    //);
  }
}

export default App;
