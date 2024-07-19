import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <Contact
          key={index}
          contact={contact}
          removeContact={() => removeContact(index)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
