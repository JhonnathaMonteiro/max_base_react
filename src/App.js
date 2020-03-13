import React, { Component } from 'react'
import './App.css';
import Person from './Person/Person'

export default class App extends Component {
  state = {
    persons: [
      {id:'asdasd1', name: 'Max', age: 28},
      {id: 'afasd5', name: 'Manu', age: 28},
      {id: 'sadfgg', name: 'BB', age: 22}
    ],
    otherState: "Other state",
    showPerson: false
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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer' 
    }
    
    // Conditionaly show method
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            return <Person 
            click = {() => this.deletePersonHandler(index)} 
            name = {person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = ['red', 'bold'].join(' ');

    return (
      <div className="App">
      <h1>Hi, I'm the React App</h1>
      <p className={classes}>This is working</p>
      <button 
        onClick={this.togglePersonsHandler}
        style={style}
      >Toggle Persons</button>
      {persons} 
    </div>
    )
  }
}

