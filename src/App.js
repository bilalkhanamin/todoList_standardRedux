import logo from "./logo.svg";
import "./App.css";
import TodoList from "./Components/TodoList";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <h1>Todos</h1>

      <Form />
      <TodoList />
    </div>
  );
}

export default App;
