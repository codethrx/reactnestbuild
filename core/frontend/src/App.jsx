import "./App.css";
// import { successMsg } from "./libs/reusables/Toast";
// import TodoList from "./components/TodoList";
// import TodoInput from "./components/TodoInput";
// import { useTodoCtx } from "./context/TodoContext";
import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client";
function App() {
  // const { data, addTodos } = useTodoCtx();
  // console.log(data);
  const GET_GEN_3 = gql`
    {
      posts {
        title
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_GEN_3);
  console.log(data);
  return (
    <div className="bg-[#212121] min-h-[100vh]  flex items-center flex-col pt-5">
      {/* <TodoInput addTodos={addTodos} successMsg={successMsg} />
      <TodoList data={data} /> */}
      <h1>Exploring GraphQl..</h1>
    </div>
  );
}

export default App;
