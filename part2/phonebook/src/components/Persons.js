import React from 'react'
import { Person } from './Person'

export const Persons = ({ filteredPersons }) => {
  return (
    <div>
      {filteredPersons.map(p =>
        <Person key={p.name} person={p} />
      )}
    </div>
  )
}
