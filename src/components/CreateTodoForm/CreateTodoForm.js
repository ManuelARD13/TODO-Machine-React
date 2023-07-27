import React, { useContext, useState } from "react";
import "../../styles/CreateTodoForm.css";
import { TODOCTX } from "../../TodoContext/TodoContext";

function CreateTodoForm () {

  const { saveTODOs, TODOs, setOpenModal } = useContext(TODOCTX)

  const [newTodo, setNewTodo] = useState("");
  const createTODO = (text) => {
    const newTodo = {
      text: text,
      completed: false
    }
    const newTODOs = [...TODOs, newTodo]
    saveTODOs(newTODOs)
    setOpenModal(false)
  } 

  const onSubmitTodos = (e) => {
    e.preventDefault();
    createTODO(newTodo);
    setOpenModal(false);
  }

  return (
    <form className="todo-form" onSubmit={onSubmitTodos}>
      <h5>Create Todo</h5>
      <textarea className="todo-input" placeholder="Mi nueva tarea es..." value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></textarea>
      <div className="form-buttons">
        <button type="submit" >Confirm</button>
        <button type="" onClick={() => setOpenModal(false)}>Cancel</button>
      </div> 
    </form>
  )
}

export { CreateTodoForm }