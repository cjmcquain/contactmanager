import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "555-555-5555"
        },
        {
          id: 2,
          name: "Karen Williams",
          email: "kwilliams@gmail.com",
          phone: "555-224-5881"
        },
        {
          id: 3,
          name: "Henry Johnson",
          email: "henry@gmail.com",
          phone: "555-123-4567"
        }
      ]
    };
  }
  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <h1>{contact.name}</h1>
        ))}
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
