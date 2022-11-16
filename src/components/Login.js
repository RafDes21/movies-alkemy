import axios from "axios";
import https from "https"
import { useNavigate, Navigate } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();
console.log(https)
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

    if (email !== "challenge@alkemy.org" || password !== "react") {
      alert("las credenciales no son correctas");
      return;
    }

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        alert("perfecto, ingresaste!!");
        const token = res.data.token;
        sessionStorage.setItem("token", token);
        navigate("/listado");
        console.log(token);
      });

    // const instance = axios.create({
    //   httpsAgent: new https.Agent({
    //     rejectUnauthorized: false,
    //   }),
    // });
    // const res = await instance.post("http://challenge-react.alkemy.org", {
    //   email,
    //   password,
    // });
    // console.log(res);
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
                <input type="email" name="email" />
              </div>
              <div className="d-flex flex-column my-3">
                <label>Ingrese su contraseña</label>
                <input type="password" name="password" />
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
