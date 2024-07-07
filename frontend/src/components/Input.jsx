import React from "react";
function Input(props) {
  return (
    <>
      <input className="w-[100%] m-1  py-2 px-3 border rounded-lg" type={props.type} id={props.id} placeholder={props.default} name={props.id} onChange={props.onchange}  />
    </>
  );
}

export default Input;
