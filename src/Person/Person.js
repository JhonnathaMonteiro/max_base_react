import React from 'react'

const person = (props) => {

  const style = {
    border: '1px solid',
    margin: '6px'
  }

  return (
      <div style={style}>
        <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old</p>
        <input type="text" onChange={props.changed} value={props.name}/>
      </div>
    )
}

export default person;