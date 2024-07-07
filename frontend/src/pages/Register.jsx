import React from "react";
import axios from "axios";
// import Input from "../components/Input";
import InputForm from "../components/InputForm";
// import Button from "../components/Button";
import FormHeading from "../components/FormHeading";
// import "./loginAndRegister.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const onchange = (e) => {
    setInputs({ ...Inputs, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3000/api/v1/register", Inputs)
      .then((res) => {
        if (res.data.message === "User already exists.") {
          alert(res.data.message);
        } else {
          alert(res.data.message);
          setInputs({
            username: "",
            email: "",
            password: "",
          });
          navigate("/login");        }
      });
    // console.log(Inputs);
  };

  return (
    <div className="flex w-[30%] mx-auto  h-[90vh] items-center">
      <InputForm>
        <FormHeading heading="Register Form" />
        <input
          className="w-[100%]   m-1  py-2 px-3 border rounded-lg"
          type="username"
          placeholder="Username"
          name="username"
          onChange={onchange}
        />
        <input
          className="w-[100%]   m-1  py-2 px-3 border rounded-lg"
          type="email"
          placeholder="Email"
          name="email"
          onChange={onchange}
        />
        <input
          className="w-[100%]  m-1  py-2 px-3 border rounded-lg"
          type="password"
          placeholder="Password"
          name="password"
          onChange={onchange}
        />
        <button
          className="flex mx-auto  bg-blue-600 hover:bg-blue-800 text-white py-3 px-5 rounded-lg mt-3 "
          type="submit"
          onClick={submit}
        >
          Submit!
        </button>
      </InputForm>
    </div>
  );
}

export default Register;
