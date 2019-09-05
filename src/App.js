import React, { Component } from "react";
import { connect } from "react-redux";
import store from "./store/index";

import addNote from "./actions/addNote";
import removeNote from "./actions/removeNote";

import "./App.css";

// const handleText = e => {
//   store.dispatch(inputText(e.target.value));
// };

// const handleSubmit = (e, { text }) => {
//   e.preventDefault();
//   store.dispatch(addNote({ author: "NEW INPUT", text, id: text }));
//   console.log(store.getState());
// };

// const handleDelete = e => store.dispatch(removeNote(e.target.id));

class App extends Component {
  state = {
    text: {
      name: "",
      surname: "",
      commit: ""
    }
  };

  handleName = e => {
    this.setState({
      text: {
        ...this.state.text,
        name: e.target.value
      }
    });
  };

  handleSurname = e => {
    this.setState({
      text: {
        ...this.state.text,
        surname: e.target.value
      }
    });
  };

  handleCommit = e => {
    this.setState({
      text: {
        ...this.state.text,
        commit: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    store.dispatch(
      addNote({
        payload: this.state.text,
        id: new Date().getTime()
      })
    );
    console.log(store.getState());
    this.setState({
      text: {
        name: "",
        surname: "",
        commit: ""
      }
    });
  };

  handleDelete = e => {
    store.dispatch(removeNote(parseInt(e.target.id)));
    console.log(store.getState());
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">TODO REACT REDUX APP</h1>
        <form className="form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            onChange={this.handleName}
            value={this.state.text.name}
          />
          <label htmlFor="surname">Surname: </label>
          <input
            id="surname"
            onChange={this.handleSurname}
            value={this.state.text.surname}
          />
          <label htmlFor="commit">Enter commit: </label>
          <textarea
            id="commit"
            cols="30"
            rows="10"
            onChange={this.handleCommit}
            value={this.state.text.commit}
          ></textarea>
          <button type="submit">ADD NOTE</button>
        </form>
        <ul className="list">
          {this.props.notes.map(note => (
            <li className="commit" key={note.id}>
              <div className="commit-content">
                <p>ID: {note.id}</p>
                <p>Name: {note.payload.name}</p>
                <p>Surname: {note.payload.surname}</p>
                <p>{note.payload.commit}</p>
                <button id={note.id} onClick={this.handleDelete}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStatetoProps = ({ text, notes }) => ({ text, notes });

export default connect(mapStatetoProps)(App);

// import React, { Component } from "react";

// import AddTodo from "./Components/AddTodo";
// import TodoList from "./Components/TodoList";

// class App extends Component {
//   state = {
//     inputValue: {
//       name: "",
//       surname: "NOGA",
//       commit: "DUPA"
//     }
//   };

//   handleCommit = e => {
//     this.setState({
//       inputValue: {
//         ...this.state.inputValue,
//         commit: e.target.value
//       }
//     });
//   };

//   render() {
//     const { inputValue } = this.state;
//     return (
//       <div>
//         <h4 style={{ margin: "auto" }}>React Redux Saga App</h4>
//         <AddTodo inputValue={inputValue} handleCommit={this.handleCommit} />
//         <TodoList />
//       </div>
//     );
//   }
// }

// export default App;
