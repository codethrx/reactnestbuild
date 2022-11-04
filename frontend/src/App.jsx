import "./App.css";
import { successMsg } from "./libs/reusables/Toast";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useTodoCtx } from "./context/TodoContext";
function App() {
  const { data, addTodos } = useTodoCtx();
  console.log(data);
  return (
    <div className="bg-[#212121] min-h-[100vh]  flex items-center flex-col pt-5">
      <TodoInput addTodos={addTodos} successMsg={successMsg} />
      <TodoList data={data} />
    </div>
  );
}

export default App;
