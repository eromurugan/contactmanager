import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    console.log("Component Did Mount...");
  }

  componentWillMount() {
    console.log("Component Will Mount...");
  }

  /*
   * Add the below event to context component and try deleting a contact
  componentDidUpdate() {
    console.log("Component Did Update...");
  }

  componentWillUpdate() {
    console.log("Component Will Update...");
  }
  */

  componentWillReceiveProps(nextProps, nextState) {
    console.log("Component will receive props...");
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
