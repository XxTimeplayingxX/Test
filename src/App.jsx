import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function TodoComponent(){
  const[todos, setTodos] = useState(createTodos);
  function createTodos(){
    const Todos = [];
  
    for(let i = 0; i<10; i++){
      Todos.push({
        id: 1,
        content: "auto generated todo",
        completed: false
      })
    }
    return Todos;
  }

  return(
    <>
    <div>

      <h1>Codifica con David</h1>
      {todos.map((todo) =>(
        <p>{todo.content}</p>
      ))}
    </div>
      
      
    </>
  )
}

function PersonComponent() {
  const [person, setPerson] = useState({
    name: "David",
    age: 21,
    color: "red",
  });

  function handlerPerson() {
    setPerson({
      ...person,
      name: "Enrique",
    });
  }
  return (
    <>
      <h1>{person.name}</h1>
      <button onClick={handlerPerson}>Change Name</button>
      {/* <input type="text" placeholder="Ingrese un nombre"/> */}
    </>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  function handleIncrement() {
    setCounter(counter + 100);
  }

  return (
    <>
      <h1>Hello World</h1>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Increment + 100</button>
      <button onClick={() => setCounter(counter + 1)}>Imcrement + 1</button>
      <hr />
      <PersonComponent />
      <hr />
      <TodoComponent/>
    </>
  );
}

export default App;
