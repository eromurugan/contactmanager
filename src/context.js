import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    default:
      return state;
  }
};

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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
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