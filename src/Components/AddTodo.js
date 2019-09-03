import React from "react";

const AddTodo = ({ name, surname, commit, handleCommit }) => (
  <form>
    <input placeholder="Name" fullWidth value={name} />
    <input placeholder="Surname" fullWidth value={surname} />
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      value={commit}
      onChange={handleCommit}
    ></textarea>
    <button>Add</button>
  </form>
);

export default AddTodo;
