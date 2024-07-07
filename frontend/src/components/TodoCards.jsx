import React from "react";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import Modal from "./Modal";

function TodoCards(props) {
  const email = sessionStorage.getItem("email");
  const id = sessionStorage.getItem("id");
  return (
    <>
      <div className="todoCards bg-todosBg mx-auto w-[29%] m-[3%] ">
        <div className="todoCard">
          <h3 className="text-xl underline text-white mb-3 text-center font-bold">
            {props.title}
          </h3>

          <p className="text-lg text-white text-center ">{props.desc}</p>
          <div className="mt-2 flex justify-center" id="buttons">
          <Modal email={email} id={id}  />
          //TODO: 2. Delete the todo from the backend too
            <button
              onClick={() => {
                props.delid(props.id);
                props.tdel();
              }}
              className="bg-red-500 mx-4 text-white p-2 rounded-md"
            >
              Delete
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoCards;
