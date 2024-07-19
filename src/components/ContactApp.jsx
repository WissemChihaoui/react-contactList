import React, { useState } from 'react';
import AddContactForm from './AddContactForm';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addContact = (name, phone) => {
    setContacts([...contacts, { name, phone }]);
  };

  const removeContact = (indexToRemove) => {
    setContacts(contacts.filter((_, index) => index !== indexToRemove));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-app">
      <h1>Contact List</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddContactForm addContact={addContact} />
      <ContactList contacts={filteredContacts} removeContact={removeContact} />
    </div>
  );
};

export default ContactApp;
