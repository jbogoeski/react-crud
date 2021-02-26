import React from 'react'

const ContactsTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Number</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {props.contacts.length > 0 ? (
        props.contacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.number}</td>
            <td>
              <button  onClick={() => {props.editContact(contact)}} className="">Edit</button>
              <button onClick={() => props.deleteContact(contact.id)} className="">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td >No Contacts</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ContactsTable