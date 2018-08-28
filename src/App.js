import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="Raja Singaram"
          email="eromurugan@gmail.com"
          phone="555-555-5555"
        />
        <Contact
          name="Priya Singaram"
          email="eropriya@gmail.com"
          phone="666-666-6666"
        />
      </div>
    );
  }
}

export default App;
