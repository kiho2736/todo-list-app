import { useContext } from "react";
import TodosContext from "../context/todos";

function TodoActions() {
  const { setShowModal, setCreateMode } =
    useContext(TodosContext);

  const handleNewClick = () => {
    setCreateMode(true);
    setShowModal(true);
  };

  const deleteSelectedTodos = () => {

  };

  return (
    <div className="action-container">
      <button
        className="button is-primary is-outlined"
        onClick={handleNewClick}
      >
        NEW
      </button>
      <button
        className="button is-danger is-outlined"
        onClick={deleteSelectedTodos}
      >
        DELETE
      </button>
    </div>
  );
}

export default TodoActions;
