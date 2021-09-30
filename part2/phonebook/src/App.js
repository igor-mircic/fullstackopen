import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredPersons, setFilteredPersons] = useState([...persons])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(r => setPersons(r.data))
  }, [])

  useEffect(() => {
    setFilteredPersons(persons.filter(p =>
      p.name.toLowerCase().includes(newFilter)
    ))
  }, [persons, newFilter])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h2>add a new</h2>
      <PersonForm
        persons={persons} setPersons={setPersons}
        newName={newName} setNewName={setNewName}
        newNumber={newNumber} setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App