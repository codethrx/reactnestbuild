import React from "react";
import Todo from "./Todo";
function TodoList({ data }) {
  const mappedTodos = data.map((d) => (
    <Todo key={d._id} title={d.title} isCompleted={d.isCompleted} id={d._id} />
  ));
  return (
    <div className={`w-[70%]`}>
      {data.length === 0 ? (
        <h2 className="text-center text-[2rem] font-['Poppins'] text-white">
          Currently You have no items..
        </h2>
      ) : (
        mappedTodos
      )}
    </div>
  );
}

export default TodoList;
