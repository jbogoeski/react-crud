import React, { useState } from 'react'

const EditContact = (props) => {
  const [contact, setContact] = useState(props.currentContact)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setContact({ ...contact, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateContact(contact.id, contact)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={contact.name}
        onChange={handleInputChange}
      />
      <label>Number</label>
      <input
        type="text"
        name="number"
        value={contact.number}
        onChange={handleInputChange}
      />
      <button>Update Contact</button>
      <button
        onClick={() => props.setEditing(false)}
        className=""
      >
        Cancel
      </button>
    </form>
  )
}

export default EditContact