import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-8483"
      },
      {
        id: 2,
        name: "Bob Jones",
        email: "bjones@gmail.com",
        phone: "555-434-8483"
      },
      {
        id: 3,
        name: "Karen Williams",
        email: "kwilliams@gmail.com",
        phone: "222-555-8483"
      }
    ]
  };
  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
