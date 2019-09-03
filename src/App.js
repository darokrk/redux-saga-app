import React, { Component } from "react";

import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

class App extends Component {
  state = {
    inputValue: {
      name: "",
      surname: "NOGA",
      commit: "DUPA"
    }
  };

  handleCommit = e => {
    this.setState({
      inputValue: {
        ...this.state.inputValue,
        commit: e.target.value
      }
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <h4 style={{ margin: "auto" }}>React Redux Saga App</h4>
        <AddTodo inputValue={inputValue} handleCommit={this.handleCommit} />
        <TodoList />
      </div>
    );
  }
}

export default App;
