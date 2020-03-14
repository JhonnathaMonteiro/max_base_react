import React, { Component } from 'react'

import classes from './App.module.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      {id:'asdasd1', name: 'Max', age: 28},
      {id: 'afasd5', name: 'Manu', age: 28},
      {id: 'sadfgg', name: 'BB', age: 22}
    ],
    otherState: "Other state",
    showPersons: false
  }

nameChangeHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex( p => {
    return p.id === id;
  });
  const person = {...this.state.persons[personIndex]};
  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({
    persons: persons
  })
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  console.log(doesShow);
  this.setState({showPersons: !doesShow});
}

deletePersonHandler = (personIndex) => {
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons})
}

  render() {
    // Conditionaly show method
    let persons = null;
    let btnClass = [classes.button]
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            return  <Person 
            click = {() => this.deletePersonHandler(index)} 
            name = {person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );

      btnClass.push(classes.red)
    }

    const assignedlasses = [];
    if (this.state.persons.length <= 2) {
      assignedlasses.push(classes.bold)
    }
    if (this.state.persons.length <= 1) {
      assignedlasses.push(classes.red)
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm the React App</h1>
          <p className={assignedlasses.join(' ')}>This is working</p>
          <button 
            className={btnClass.join(' ')}
            onClick={this.togglePersonsHandler}
          >Toggle Persons</button>
          {persons} 
        </div>
    )
  }
}

export default App;