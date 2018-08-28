import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: newContacts });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;

          const mapContact = contact => (
            <Contact
              key={contact.id}
              contact={contact}
              deleteClickHandler={this.deleteContact.bind(this, contact.id)}
            />
          );

          return <React.Fragment>{contacts.map(mapContact)}</React.Fragment>;
        }}
      </Consumer>
    );
  }
}

export default Contacts;
