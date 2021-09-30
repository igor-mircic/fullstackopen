import axios from "axios";
import { useEffect, useState } from "react";
import { CountriesDisplay } from "./CountriesDisplay";

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(r => setAllCountries(r.data))
  }, [])

  return (
    <div>
      <span>find countries: </span>
      <input type="text" value={filter} onChange={(e) => setFilter(e.target.value.toLowerCase())} />
      <CountriesDisplay allCountries={allCountries} filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default App;
