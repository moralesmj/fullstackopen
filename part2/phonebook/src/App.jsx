import { useState } from 'react'
import Title from './components/Title'
import Form from './components/Form'
import Content from './components/Content'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
    }
    
    const exists = persons.some(person =>
      person.name === newName
    )

    if (exists) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <Title title={'Phonebook'} />
      <Form onSubmit={addPerson} value={newName} onChange={handleNameChange} />

      <Title title={'Numbers'} />
      <Content persons={persons} />
    </div>
  )
}

export default App