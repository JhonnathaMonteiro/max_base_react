import React, { Component } from 'react'

// import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.module.css';


class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
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

componentDidMount(){
  console.log('[App.js] ComonentDidMount');
}

componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');
}

shouldComponentUpdate(nextProps, nextState){
  console.log('[App.js] shouldComponentUpdate');
  return true;  
}

  render() {
    console.log('[App.js] render');
    
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler} 
        changed={this.nameChangeHandler}/>;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          title={this.props.title}
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons} 
      </div>
    )
  }
}

export default App;