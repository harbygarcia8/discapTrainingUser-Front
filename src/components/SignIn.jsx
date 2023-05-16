import React, {useState} from 'react'
import '../styles/Login.scss'
import {getToken} from '../service/authToken'

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  async function handlePostRequest() {
    try {
      const response = await getToken();
    } catch (error) {
      console.log(error); // aquí actualizamos el estado con el mensaje de error
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem('email', email)
    sessionStorage.setItem('password', password)
    console.log(`Email: ${ email}, Password: ${password}`);
  }
  
  return (
    <div className="email">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email" className="label">Email address</label>
          <input 
            type="email"
            name="email"
            id="email"
            className="input input-email"
            value={email} 
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email@gmail.com"
          />

          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="input input-email"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="********"
          />

          <button type="submit" className="primary-button login-button" onClick={handlePostRequest}>Iniciar sesión</button>
          <p className="forgot">
            <a href="/">Forgot my password</a>
          </p>
        </form>
        <button className="signUp-button primary-button">
            <a href='/'>Sign Up</a>
        </button>
      </div>
    </div>
  )
}

export default SignIn