import React, { useState } from "react";
import "../styles/loginModern.scss";
import "../styles/Login.scss";
import getToken  from "../service/authToken";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notifySuccess = () => {
    toast.success('Inicio de sesion Correcto, Bienvenido', {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      window.location.href = 'home'; // Reemplaza con la URL de la página a la que deseas redireccionar
    }, 1000)
  };
  const notifyWarning = () => {
    toast.warning('Inicio de sesion incorrecto , vuelve a intentarlo !!.', {
      position: toast.POSITION.TOP_CENTER
    });
  };

  async function handlePostRequest() {
    try {
      const response = await getToken();
      if (response) {
        notifySuccess()
      } else {
        notifyWarning();
      }
    } catch (error) {
      console.log(error); // aquí actualizamos el estado con el mensaje de error
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="wrapper fadeInDown email">
      <div id="formContent">
        {/* <div className="form-container"> */}
        <h2 className="active"> Sign In </h2>
        <a href="/signUp">
          <h2 className="inactive underlineHover">Sign Up</h2>
        </a>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="login"
            className=" input-email fadeIn second"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Correo electronico"
          />

          <input
            type="password"
            name="password"
            id="password"
            className=" input-email fadeIn third"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
          <a href="/home">
            <input
              type="submit"
              onClick={handlePostRequest}
              className="fadeIn fourth"
              value="Iniciar sesión"
            />
            <ToastContainer />
          </a>
          <div id="formFooter" className="forgot">
            <a className="underlineHover" href="/">
              Forgot my password
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
