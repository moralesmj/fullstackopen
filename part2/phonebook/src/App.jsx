import { useState, useEffect } from 'react'
import axios from 'axios'
import Title from './components/Title'
import Form from './components/Form'
import Content from './components/Content'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [term, setTerm] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then((response) => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }

    const exists = persons.some(person =>
      person.name === newName
    )

    if (exists) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const filterNames = persons.filter(person =>
    person.name.toLowerCase().includes(term.toLowerCase())
  )

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleTermChange = (event) => {
    setTerm(event.target.value)
  }

  return (
    <div>
      <Title title={'Phonebook'} />
      <Filter term={term} handleTermChange={handleTermChange} />

      <Title title={'add a new'} />
      <Form
        onSubmit={addPerson}
        name={newName}
        number={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <Title title={'Numbers'} />
      <Content persons={filterNames} />
    </div>
  )
}

export default App