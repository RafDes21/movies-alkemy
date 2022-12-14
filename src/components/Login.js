import { useNavigate, Navigate } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();
  const tok =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE";

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      alert("campos vacios");
      return;
    }

    if (email !== "" && !regex.test(email)) {
      alert("debe ingresar un email valido");
      return;
    }

    if (email !== "prueba@gmail.com" || password !== "react") {
      alert("las credenciales no son correctas");
      return;
    }
    sessionStorage.setItem("token", tok);
    // alert("Bienvenido")
    navigate("/perfiles");
  };

  const token = sessionStorage.getItem("token");
  return (
    <section className="section-login">
      <div className="container login">
        {token && <Navigate to="/perfiles"/>}
        <div className="row ">
          <div className="col-md-12 d-flex justify-content-center">
            <form onSubmit={submitHandler}>
              <h2 className="text-center">Iniciar Sesión</h2>
              <div className="d-flex flex-column my-3">
                <label>Ingrese su email</label>
                <input type="email" name="email" value="prueba@gmail.com" />
              </div>
              <div className="d-flex flex-column my-3">
                <label>Ingrese su contraseña</label>
                <input type="password" name="password" value="react"/>
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
