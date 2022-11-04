import todoInstance from "../constants/api";
import { TODO_SCHEMA } from "../schemas/todoSchema";
import { ACTIONS_TODO_TYPES } from "../constants/todoActions";
import { createContext, useContext, useReducer, useEffect } from "react";

const { GETALLTODOS, UPDATETODO, DELETETODO, ADDTODO, SETLOADING, SETERROR } =
  ACTIONS_TODO_TYPES;
const TodoCtx = createContext();
function reduceTodos(val, action) {
  switch (action.type) {
    case SETLOADING:
      return { ...val, loading: action.payload, error: null };
    case GETALLTODOS:
      return { ...val, data: action.payload, error: null };
    case ADDTODO:
      return { ...val, data: [...val.data, action.payload], error: null };
    case SETERROR:
      return { ...val, error: action.payload };
    case DELETETODO:
      return {
        ...val,
        error: null,
        data: val.data.filter((d) => d._id !== action.payload._id),
      };
    case UPDATETODO:
      return {
        ...val,
        error: null,
        data: val.data.map((d) =>
          d._id === action.payload._id
            ? { ...d, isCompleted: action.payload.isCompleted }
            : d
        ),
      };
    default:
      return val;
  }
}
export const TodoCtxProvider = ({ children }) => {
  const [content, dispatch] = useReducer(reduceTodos, {
    loading: false,
    error: null,
    data: [],
  });
  const getAllTodos = async () => {
    dispatch({ type: SETLOADING, payload: true });
    const todosPromise = await todoInstance.get();

    if (todosPromise.statusText === "OK") {
      dispatch({ type: GETALLTODOS, payload: todosPromise.data });
      dispatch({ type: SETLOADING, payload: false });
    }
  };
  const addTodos = async (data) => {
    const todo = { title: data };
    try {
      const newTodo = await todoInstance.post("/", todo);
      dispatch({ type: ADDTODO, payload: newTodo.data.newUser });
    } catch (e) {
      console.log();
      dispatch({ type: SETERROR, payload: e?.response.data });
    }
  };
  const updateTodo = async (id, data) => {
    try {
      const updatedTodo = await todoInstance.put(`/${id}`, data);
      //   console.log(updatedTodo);
      dispatch({
        type: UPDATETODO,
        payload: updatedTodo.data.updatedTodo,
      });
    } catch (e) {
      dispatch({ type: SETERROR, payload: "Error Updating Todo" });
    }
  };
  const deleteTodo = async (id) => {
    try {
      const deletedTodo = await todoInstance.delete(`/${id}`);

      dispatch({ type: DELETETODO, payload: deletedTodo.data.deletedTodo });
    } catch (e) {
      dispatch({ type: SETERROR, payload: "Error Deleting Todo" });
    }
  };
  useEffect(() => {
    getAllTodos();
  }, []);
  return (
    <TodoCtx.Provider value={{ ...content, addTodos, deleteTodo, updateTodo }}>
      {children}
    </TodoCtx.Provider>
  );
};
export const useTodoCtx = () => useContext(TodoCtx);
