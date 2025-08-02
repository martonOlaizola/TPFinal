import "../styles/Login.css"
import { useState } from "react"
import { loginUser } from "../services/authService"
import Layout from "../layouts/Layout"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [form, setForm] = useState({ email:"", password: ""})
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await loginUser(form.email, form.password)
      setMessage(`Bienvenido ${user.email}`)
      
      localStorage.setItem("user", JSON.stringify(user))

      navigate("/")
    } catch(error){
      setMessage(`Error al iniciar sesión: ${error.message}`)
    }
  }
  return (
    <>
    <Layout>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="text"
              name="email"
              id="email"
              value={ form.email }
              onChange={handleChange}
              placeholder="ejemplo@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              value={ form.password }
              onChange={handleChange}
              placeholder="Contraseña"
            />
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </div>
      {message && <p>{mensaje}</p>}
    </Layout>
    </>
  )
}

export default Login