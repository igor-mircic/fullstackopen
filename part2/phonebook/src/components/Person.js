import React from 'react'
import personsService from '../services/persons'

export const Person = ({ person }) => {
  const deletePerson = (id) => () => {
    if (window.confirm(`Delete ${person.name}`)) {

      personsService.remove(id)
    }
  }

  return (
    <p>
      {person.name}: <span>{person.number} </span>
      <button onClick={deletePerson(person.id)}>delete</button>
    </p>
  )
}
