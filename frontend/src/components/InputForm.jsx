import React from "react";

function InputForm({ children }) {
  return (
    <>
      <div id="inputForm">
        <div className="w-[100%]">{children} </div>
      </div>
    </>
  );
}

export default InputForm;
