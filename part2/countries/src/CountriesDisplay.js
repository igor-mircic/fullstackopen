import React from 'react'
import { CountryDetails } from './CountryDetails'

export const CountriesDisplay = ({ allCountries, filter, setFilter }) => {
  const filteredCountries = allCountries.filter(({ name: { common: name } }) =>
    name.toLowerCase().includes(filter))
  const length = filteredCountries.length
  if (length === 1) {
    return <CountryDetails country={filteredCountries[0]} />
  } else if (length < 10) {
    return <div>
      {filteredCountries.map(({ name: { common: name }, cca3: id }) =>
        <div key={id}>
          <span>{name}</span>
          <button
            value={name}
            onClick={({ target: { value } }) => setFilter(value.toLowerCase())}
          >
            show
          </button>
        </div>)}
    </div>
  } else {
    return <div>
      <div>To many matches, specify another filter</div>
    </div>
  }
}
