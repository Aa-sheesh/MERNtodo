import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Input from "../components/Input";
import InputForm from "../components/InputForm";
// import Button from "../components/Button";
import FormHeading from "../components/FormHeading";
// import "./loginAndRegister.css"
import { useDispatch } from "react-redux";
import { authActions } from "../store";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const onchange = (e) => {
    setInputs({ ...Inputs, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    await axios.post("http://localhost:3000/api/v1/login", Inputs).then((res) => {
      if (res.data._id) {
        setInputs({
          email: "",
          password: "",
        });
        sessionStorage.setItem("id", res.data._id);
        sessionStorage.setItem("email", res.data.email);
        dispatch(authActions.login());
        navigate("/");
      } else {
        alert(res.data.message);
        navigate("/login");
      }
    });
  };
  return (
    //TODO: 1. Get all the todos from backend
    <div className="flex w-[30%] mx-auto items-center h-[90vh]">
      <InputForm>
        <FormHeading heading="Login Form" />
        <input
          className="w-[100%]   m-1  py-2 px-3 border rounded-lg"
          type="email"
          placeholder="Email"
          name="email"
          value={Inputs.email}
          onChange={onchange}
        />
        <input
          className="w-[100%]   m-1  py-2 px-3 border rounded-lg"
          type="password"
          placeholder="Password"
          name="password"
          value={Inputs.password}
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

export default Login;
