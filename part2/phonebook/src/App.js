import React, { useState, useEffect } from 'react'
import Display from './components/Display.js'
import AddItems from './components/AddItems.js'
import personsService from './services/book'
import Success from './components/DisplaySuccess'
import ErrorDisplay from './components/ErrorDisplay' 

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ successMessage, setSuccessMessage ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)

  const hook = () => {
    personsService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }

  useEffect(hook, [])

  const addName = (event) => {
    event.preventDefault()
    if(persons.filter(person => person.name === newName).length === 0){
      const personObject = {
        name: newName,
        number: newNumber
      }
      personsService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response))
          setSuccessMessage(`${newName} was added sucessfully!`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
        .catch((error) => {
          setErrorMessage(error.response.data['Error'])
          setTimeout(() => {setErrorMessage(null)}, 5000)
        })
  }
    else{
      const result = window.confirm(`${newName} is already in the phonebook! Update the number?`)
      if(result === true){
        const personObject = {
          name: newName,
          number: newNumber
        }
        const id = getIdByName(newName)
        personsService
          .update(id, personObject)
          .then(response => {
            console.log(response)})
          .catch(error => {
            setErrorMessage(
              `The person '${newName}' has been deleted from the server!`)
            setTimeout(() => {
             setErrorMessage(null)
             }, 5000)
            return
          })
        personsService
          .getAll()
          .then(persons => {
            setPersons(persons)
            setSuccessMessage(`${newName}'s number was altered sucessfully!`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 5000)
          })
          .catch(error => {
            setErrorMessage(error.response.data['Error'])
            setTimeout(() => {
             setErrorMessage(null)
             }, 5000)
          })
      } 
      else{
        return
      }     
    }
    setNewName('')
    setNewNumber('')
  }

  const getIdByName = (name) => {
    const person_id = persons.filter(person => person.name === name)
    return person_id[0].id
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const deleteUser = (id, name) => {
    const result = 
      window.confirm(`Are you sure you wanna delete ${name}?`)
      if(result === true){
        personsService
          .remove(id)
          .then(response => {
            console.log(response)
          })
        personsService
          .getAll()
          .then(persons => {setPersons(persons)})
      }
      else{
        return
      }
  }

  const personsToShow = newSearch === '' ? persons : persons.filter(
    person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Success message={successMessage} />
      <ErrorDisplay message={errorMessage} />
      Search: <input value={newSearch} onChange={handleSearchChange} />
      <br />
      <h2>Add New Name</h2>
      <AddItems newName={newName} handleNameChange={handleNameChange}
       newNumber={newNumber} handleNumberChange ={handleNumberChange} addName={addName} />
      <h2>Numbers</h2>
      {personsToShow.map(person => 
        <Display key={person.name} name={person.name}
          number={person.number} deleteHandler={() => deleteUser(person.id, person.name)}/>
      )}
    </div>
    )
}

export default App