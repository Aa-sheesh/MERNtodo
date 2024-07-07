import React from "react";
import { useState } from "react";
import axios from "axios";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Todos() {
  const [Inputs, setInputs] = useState({
    title: "",
    description: "",
    email: sessionStorage.getItem("id"),
  });
  const [Array, setArray] = useState([]);
  const change = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
    // console.log(todos);
  };
  const submit = (e) => {
    // console.log(JSON.stringify(todos))
    if (Inputs.title === "" || Inputs.description === "") {
      toast.warn("Please enter title and description!", { autoClose: 3000 });
      return;
    }
    toast.success("Todo Added Successfully");
    if (sessionStorage.getItem("id") === null) {
      toast.warn("Please Login to save Todos!", { autoClose: 3000 });
    }
    document.getElementById("todo").value = "";
    document.getElementById("description").value = "";
    setArray([...Array, Inputs]);

    // console.log(Array);
    setInputs({
      title: "",
      description: "",
      email: sessionStorage.getItem("id"),
    });
    
  };

  const toastdel = () => {
    toast.error("Todo Deleted Successfully");
  };

  const del = (id) => {
    Array.splice(id, "1");
    setArray([...Array]);
  };

  return (
    <>
      <div id="Todo">
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition:Bounce
        />
        <h2 className="flex text-xl hover:text-slate-300 font-extrabold text-white justify-center UNDERLINE p-5">
          📚 Daily ToDos 📚
        </h2>
        <div className="todos"></div>
        <div className="addTodos flex flex-wrap w-[30%]  mx-auto">
          <input
            type="text"
            className="p-2 border border-slate-400 text-white bg-gray-500 rounded-t-lg area w-[100%]"
            onChange={change}
            placeholder="Title"
            id="todo"
            name="title"
          />
          <textarea
            type="text"
            className="p-2 border cursor- border-t-0 border-slate-400 text-white bg-gray-500 rounded-b-lg area w-[100%]"
            onChange={change}
            placeholder="Description"
            id="description"
            name="description"
          />
          <div className="mt-2 mx-auto ">
            <input
              className="bg-green-700 cursor-pointer   text-white px-5 hover:bg-green-900 bottom-0 rounded-md p-2"
              type="submit"
              value="Add Todo"
              onClick={submit}
            />
          </div>
        </div>
        <div id="todoCards" className="w-screen flex flex-wrap">
          {Array &&
            Array.map((item, index) => (
              <>
                <TodoCards
                  id={index}
                  title={item.title}
                  desc={item.description}
                  delid={del}
                  key={index}
                  tdel={toastdel}
                />
              </>
            ))}
        </div>
        <div className="todos"></div>
      </div>
    </>
  );
}

export default Todos;
