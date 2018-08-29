import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;

          const mapContact = contact => (
            <Contact key={contact.id} contact={contact} />
          );

          return <React.Fragment>{contacts.map(mapContact)}</React.Fragment>;
        }}
      </Consumer>
    );
  }
}

export default Contacts;
