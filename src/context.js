import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
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

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
