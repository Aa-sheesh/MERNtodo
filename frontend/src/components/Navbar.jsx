import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/index.js";

export default function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const logout = () => {
    dispatch(authActions.logout());
    sessionStorage.removeItem("id");
  };
  // console.log(isLoggedIn);
  return (
    <>
      <nav className="w-screen bg-[#3e3e3e] flex justify-end ">
        {isLoggedIn ? (
          <><Link
          to={"/"}
          onClick={logout}
          className="text-slate-200 border-2 m-2 rounded-md p-2 bg-red-400 hover:bg-red-600  "
        >
          Logout
        </Link></>
        ) : (
          <>
            <Link
              to={"/"}
              className="text-slate-200 border-2 m-2 rounded-md p-2 bg-slate-700 hover:bg-slate-900  "
            >
              Todos
            </Link>
            <Link
              className="bg-orange-400 border-2
            m-2 rounded-md p-2 text-slate-200 hover:bg-orange-600 "
              to={"/register"}
            >
              Register
            </Link>
            <Link
              to={"/login"}
              className="text-slate-200 border-2 m-2 rounded-md p-2 bg-green-500 hover:bg-green-700 "
            >
              Login
            </Link>
          </>
        )}
      </nav>
    </>
  );
}
