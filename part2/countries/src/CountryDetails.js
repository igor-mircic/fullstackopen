import React from 'react'

export const CountryDetails = ({ country }) => <div>
  <h1>{country.name.common}</h1>
  <p>Capital: <span> {country.capital} </span></p>
  <p>Population: <span> {country.population} </span></p>
  <h2>Languages</h2>
  <ul>
    {Object.values(country.languages).map(l => <li key={l}>{l}</li>)}
  </ul>
  <img
    src={country.flags.svg}
    alt={`${country.name.common} flag`}
    style={{
      width: "200px"
    }} />
</div>
