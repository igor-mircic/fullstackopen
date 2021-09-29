import React from 'react'

export const Person = ({ person }) => {
  return (
    <p>
      {person.name}: <span>{person.number}</span>
    </p>
  )
}
