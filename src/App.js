import React, { useState, Fragment, useEffect } from 'react'
import UserTable from './components/ContactsTable'
import AddContact from './components/AddContact'
import EditContact from './components/EditContact'


const App = () => {
  const contactsData = []

  const [contacts, setContacts] = useState(contactsData);
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', number: '' }
  const [currentContact, setCurrentContact] = useState(initialFormState)

  const addContact = (contact) => {
    contact.id = contacts.length + 1
    setContacts([...contacts, contact])
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  const editContact = (contact) => {
    setEditing(true)
  
    setCurrentContact({ id: contact.id, name: contact.name, number: contact.number })
  }

  const updateContact = (id, updatedContact) => {
    setEditing(false)
  
    setContacts(contacts.map((contact) => (contact.id === id ? updatedContact : contact)))
  }


  useEffect(() => {
    getLocalContacts()
  }, []);

  // Use Effect
  useEffect(() => {
    saveLocalContacts();
  }, [contacts]);

 // save to local
 const saveLocalContacts = () => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
  };
  const getLocalContacts = () => {
    if(localStorage.getItem('contacts') === null){
      localStorage.setItem('contacts', JSON.stringify([]));
    } else {
      let ContactLocal = JSON.parse(localStorage.getItem('contacts'));
      setContacts(ContactLocal);
    }
  };


  return (
    <div className="container">
			<h1>CRUD App</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Contact</h2>
							<EditContact
								editing={editing}
								setEditing={setEditing}
								currentContact={currentContact}
								updateContact={updateContact}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Contact</h2>
							<AddContact addContact={addContact} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Contacts</h2>
					<UserTable contacts={contacts} editContact={editContact} deleteContact={deleteContact} />
				</div>
			</div>
		</div>
  )
}

export default App