import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    console.log("Component Did Mount...");

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
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
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
