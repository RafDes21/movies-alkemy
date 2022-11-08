import React from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
import {useNavigate} from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      swal(<h2>los campos no pueden estar vacios</h2>);
      return;
    }

    if (email !== "" && !regex.test(email)) {
      swal(<h2>debe ingresar un email valido</h2>);
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      swal(<h2>las credenciales no son correctas</h2>);
      return;
    }
    console.log("estamos listos");
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        swal(<h2>perfecto, ingresaste!!</h2>);
        const token = res.data.token;
        localStorage.setItem("token", token);
       navigate('/listado')
        console.log(token);
      });
  };
  return (
    <>
    
      <h2>Formulario de Login</h2>
      <form onSubmit={submitHandler}>
        <label>
          Ingrese su email
          <input type="email" name="email" />
        </label>
        <label>
          Ingrese su contraseña
          <input type="password" name="password" />
        </label>
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
};

export default Login;
