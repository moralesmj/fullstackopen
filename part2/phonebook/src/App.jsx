import { useState, useEffect } from 'react'
import personService from './services/persons'
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
    personService
      .getAll()
      .then(response =>
        setPersons(response.data))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const exists = persons.find(
      person => person.name === newName
    )

    if (exists) {
      if (window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )) {
        const updatedPerson = {
          ...exists,
          number: newNumber
        }

        personService
          .update(exists.id, updatedPerson)
          .then(response => {
            setPersons(
              persons.map(person =>
                person.id !== exists.id
                  ? person
                  : response.data
              )
            )
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1),
      }

      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const removePerson = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {

      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
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
      <Content persons={filterNames} removePerson={removePerson} />
    </div>
  )
}

export default App