import React from "react";
import { useTodoCtx } from "../context/TodoContext";
import { ImCheckboxChecked } from "react-icons/im";
import { BsFillTrashFill } from "react-icons/bs";
import { errorMsg } from "../libs/reusables/Toast";
function Todo({ title, isCompleted: complete, id }) {
  const { updateTodo, deleteTodo, error } = useTodoCtx();
  React.useEffect(() => {
    if (error) {
      errorMsg(error);
    }
  }, [error]);
  const updateTodoHandler = (...props) => {
    updateTodo(...props);
  };
  const deleteTodoHandler = (id) => {
    deleteTodoHandler(id);
  };

  return (
    <div className={`bg-white flex p-2 my-1 ${complete && "opacity-[0.7]"}`}>
      <h2 className="flex-1 text-lg font-['Poppins']">{title}</h2>
      <button
        className="p-2"
        onClick={() => {
          updateTodo(id, { isCompleted: !complete });
        }}
      >
        <ImCheckboxChecked color="#23d997" />
      </button>
      <button
        className="p-2"
        onClick={() => {
          deleteTodo(id);
        }}
      >
        <BsFillTrashFill color="rgba(255,0,0,0.8)" />
      </button>
    </div>
  );
}

export default Todo;
