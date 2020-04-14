import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Display from './components/Display.js'

const endpoint = "https://restcountries.eu/rest/v2/all"

const App = () => {
  const [data, setData] = useState([])
  const [newSearch, setNewSearch] = useState('')
  //const [dataToShow, setDataToShow] = useState([])

  const hook = () => {
    axios
        .get(endpoint)
        .then(response => {
          setData(response.data)
          console.log(data)
        })
  }
  
  useEffect(hook, [])

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const dataToShow = newSearch === '' ? data : data.filter(
    country => country.name.toLowerCase().includes(newSearch.toLowerCase()))

  return(
    <div>
      Search: <input value={newSearch} onChange={handleSearchChange} />
      <br />
      <Display countries={dataToShow} />
    </div>
  )
}

export default App;
