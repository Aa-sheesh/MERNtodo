import React from "react";
import Popup from "reactjs-popup";
import { useState } from "react";
import axios from "axios";

export default (props) => {
  const [Inputs, setInputs] = useState({
    email: props.email,
    title: "",
    description: "",
  });
  const id=props.id;
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
    // console.log(Inputs);
  };
  return (
    //TODO: Connect title and description to the backend
    //TODO: Connect the update button to the backend
    <Popup
      trigger={
        <button className="button bg-green-500 rounded-md  p-2"> Update </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal bg-blue-800 ">
          <button className="close" onClick={close}>
            <span className="text-2xl bg-red-600 px-3 py-1 ">&times;</span>
          </button>
          <div className="header text-2xl font-bold text-center text-green-300 mb-3">
            {" "}
            Update{" "}
          </div>
          <div className="content mx-auto w-[30%]">
            <input
              type="text"
              placeholder="Title"
              className="w-[100%] border m-1 p-2 rounded-sm"
              name="title"
              onChange={change}
            />
            <textarea
              type="text"
              placeholder="Description"
              name="description"
              className="w-[100%] border m-1 p-2 rounded-sm"
              onChange={change}
            />
          </div>
          <div className="actions flex justify-center">
            <button
              className="button bg-green-500 p-2 m-2 rounded-md"
              onClick={async() => {
                const id = sessionStorage.getItem("id");

                if (id) {
                //   await axios.put("localhost:3000/api/v1/update", Inputs, {
                //     params: { id: id },
                //   });
                    
                }
                close();
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};
