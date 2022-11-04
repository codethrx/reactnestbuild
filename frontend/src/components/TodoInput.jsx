import React from "react";
import { errorMsg } from "../libs/reusables/Toast";

function TodoInput({ addTodos, successMsg }) {
  const [inputVal, setInputVal] = React.useState("");
  const onChangeText = (e) => setInputVal(e.target.value);
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!inputVal) return errorMsg("Kindly fulfil Input Field");
    addTodos(inputVal);
    successMsg("New Todo added...");
    setInputVal("");
  };
  return (
    <form className="py-10 w-[50%] flex " onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Enter some text."
        className="flex-1 p-2 font-['Poppins'] text-black"
        value={inputVal}
        onChange={onChangeText}
      />
      <button className="bg-[#23d996] p-2 flex items-center justify-center font-['Poppins'] text-white">
        Add Todo...
      </button>
    </form>
  );
}

export default TodoInput;
