import React, { useState } from 'react'

const AddContact = (props) => {
    const initialFormState = { id: null, name: '', number: '' }
    const [contact, setContact] = useState(initialFormState)


    const handleInputChange = (event) => {
        const { name, value } = event.target
    
        setContact({ ...contact, [name]: value })
      }

  return (
    <form
    onSubmit={(e) => {
        e.preventDefault()
        if(!contact.name || !contact.name) return

        props.addContact(contact)
        setContact(initialFormState)
    }}
    >
      <label>Name</label>
      <input type="text" name="name" value={contact.name} onChange={handleInputChange} />
      <label>Number</label>
      <input type="text" name="number" value={contact.number} onChange={handleInputChange} />
      <button>Add new Contact</button>
    </form>
  )
}

export default AddContact