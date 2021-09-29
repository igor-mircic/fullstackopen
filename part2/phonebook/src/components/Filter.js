import React from 'react'

export const Filter = ({ newFilter, setNewFilter }) => {
  return (
    <div>
      <span>filter shown with: </span>
      <input
        value={newFilter}
        onChange={e => setNewFilter(e.target.value)}
      />
    </div>
  )
}
