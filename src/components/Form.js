import React, { useState, useEffect } from "react";

function Form({
  setInputText,
  setTodos,
  todos,
  inputText,
  setStatus,
  filteredTodos,
}) {
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };
  const [input, setInput] = useState("");
  // const [todos, setTodos] = useState([]);
  let ob = ["my", "s", "my", "s"];
  useEffect(() => {
    // console.log(input);
  }, [input]);

  function submitTodoHandler(e) {
    e.preventDefault();
    console.log(todos);
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ]);
  }

  function statusHandler(e) {
    // console.log(e.target.value);
    setStatus(e.target.value);
  }
  return (
    <form>
      {/* {ob.map((o, key) => (
        <p onClick={localStorage.setItem(key, o)}>{o}</p>
      ))} */}
      <input
        type="text"
        onChange={inputTextHandler}
        value={inputText}
        placeholder="Enter the todo!"
        className="todo-input"
      />
      <button className="todo-button" onClick={submitTodoHandler} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
