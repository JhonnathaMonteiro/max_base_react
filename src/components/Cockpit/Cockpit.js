import React, { useEffect} from 'react';

import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
  }, [props.persons]);

  const assignedlasses = [];
  let btnClasses = '';
  if (props.showPersons) {
    btnClasses = classes.red;
  }
  if (props.persons.length <= 2) {
    assignedlasses.push(classes.bold)
  }
  if (props.persons.length <= 1) {
    assignedlasses.push(classes.red)
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedlasses.join(' ')}>This is working</p>
      <button 
        className={btnClasses}
        onClick={props.clicked}
      >Toggle Persons</button>
    </div>
  )
}

export default Cockpit;