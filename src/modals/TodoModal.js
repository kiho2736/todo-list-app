import "./TodoModal.css";

import { useContext } from "react";
import TodosContext from "../context/todos";

import TodoContent from "./TodoContent";
import CreateMode from "./CreateMode";

function TodoModal() {
  const { currentTodo, showModal, closeModal, createMode, editMode } =
    useContext(TodosContext);

  let form = <TodoContent currentTodo={currentTodo} />;
  if (createMode || editMode) {
    form = <CreateMode />;
  }

  return (
    <div className={`modal ${showModal ? "is-active" : ""}`}>
      <div className="modal-background" onClick={closeModal}></div>
      {form}
    </div>
  );
}

export default TodoModal;
