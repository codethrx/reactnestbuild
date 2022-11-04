import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TodoCtxProvider } from "./context/TodoContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  // uri: "https://beta.pokeapi.co/graphql/v1beta",
  uri: "https://jsonplaceholder.typicode.com",
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <TodoCtxProvider>
        <App />
        <ToastContainer />
      </TodoCtxProvider>
    </ApolloProvider>
  </React.StrictMode>
);
