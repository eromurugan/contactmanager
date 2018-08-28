import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Raja Singaram",
        email: "eromurugan@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Priya Singaram",
        email: "eropriya@gmail.com",
        phone: "666-666-6666"
      },
      {
        id: 3,
        name: "Selvi Singaram",
        email: "eroselvi@gmail.com",
        phone: "777-777-7777"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;

    const mapContact = contact => (
      <Contact
        key={contact.id}
        contact={contact}
        deleteClickHandler={this.deleteContact.bind(this, contact.id)}
      />
    );

    return <React.Fragment>{contacts.map(mapContact)}</React.Fragment>;
  }
}

export default Contacts;
