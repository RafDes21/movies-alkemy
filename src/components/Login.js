import React from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate, Navigate } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();
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

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        swal(<h2>perfecto, ingresaste!!</h2>);
        const token = res.data.token;
        sessionStorage.setItem("token", token);
        navigate("/listado");
        console.log(token);
      });
  };

  const token = sessionStorage.getItem("token");
  return (
    <section className="section-login">
      <div className="container login">
        {token && <Navigate to="/listado" />}
        <div className="row ">
          <div className="col-md-12 d-flex justify-content-center">
            <form onSubmit={submitHandler}>
              <h2 className="text-center">Iniciar Sesión</h2>
              <div className="d-flex flex-column my-3">
                <label>Ingrese su email</label>
                <input type="email" name="email" value="challenge@alkemy.org" />
              </div>
              <div className="d-flex flex-column my-3">
                <label>Ingrese su contraseña</label>
                <input type="password" name="password"  />
              </div>
              <button type="submit">Click</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
