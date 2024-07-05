import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <>
      <nav className="w-screen bg-[#3e3e3e] flex justify-end ">
        <button
          className="bg-orange-400 border-2
            m-2 rounded-md p-2 text-slate-200 "
        >
          Register
        </button>
        <button className="text-slate-200 border-2 m-2 rounded-md p-2 bg-green-500 ">
          Login
        </button>
      </nav>
      <div id="Todo">
        <h2 className="flex text-xl font-extrabold text-white justify-center UNDERLINE p-5">
          📚 Daily ToDos 📚
        </h2>
        <div className="todos"></div>
        <div className="addTodos flex justify-center">
          <form method="post">
            <input
              type="text"
              className="p-2 text-white bg-gray-500 rounded-l-md"
              placeholder="Add todo"
              id="todo"
            />
            <input
              className="bg-green-700 bottom-0 rounded-r-md p-2"
              type="submit"
              value="AddTodo"
            />
          </form>
        </div>
        <div className="todos"></div>
      </div>
    </>
  );
}

export default App;
