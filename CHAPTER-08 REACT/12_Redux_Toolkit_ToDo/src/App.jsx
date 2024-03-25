import "./App.css";
import AddToDo from "./components/AddToDo";
import ToDos from "./components/ToDos";

function App() {
  return (
    <>
      <h1 className="text-xl font-bold">To-Do</h1>
      <AddToDo />
      <ToDos />
    </>
  );
}

export default App;
