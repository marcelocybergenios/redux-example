import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({
              name: "Marcelo",
              age: 18,
              email: "marcelo@gmail.com",
            })
          );
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
