import React from 'react'

export const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber
}) => {
  const addContact = (e) => {
    e.preventDefault()
    if (!persons.find(p =>
      p.name.toLowerCase() === newName.toLowerCase())
    ) {
      const newContact = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newContact))
    } else {
      alert(`${newName} is already add to phonebook`)
    }
  }
  return (
    <form onSubmit={addContact}>
      <div>
        <span>name: </span>
        <input
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
      </div>
      <div>
        <span>number: </span>
        <input
          value={newNumber}
          onChange={e => setNewNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}
