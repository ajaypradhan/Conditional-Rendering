import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form className="form">
      <Input type="text" feild="Username" />
      <Input type="password" feild="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
