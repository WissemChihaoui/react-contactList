import React from 'react';

const Contact = ({ contact, removeContact }) => {
  return (
    <li>
      <span>{contact.name} - {contact.phone}</span>
      <button onClick={removeContact}>Remove</button>
    </li>
  );
};

export default Contact;
