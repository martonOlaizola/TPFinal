import "../styles/Register.css"
import Layout from "../layouts/Layout"
import { registerUser } from "../services/authService"
import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({ name: "", lastname: "", email: "", password: "" });
  const [mensaje, setMensaje] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      setMensaje("Registro exitoso ✅");
    } catch (error) {
      setMensaje("Error en el registro: " + error.message);
    }
  };

  return (
    <Layout>
      <div className="register-conteiner">
        <h1>Registrate</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="text" name="email" id="email" value={form.email} placeholder="ejemplo@email.com" onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" value={form.name} placeholder="Tu Nombre" onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Apellido</label>
            <input type="text" name="lastname" id="lastname" value={form.lastname} placeholder="Tu Apellido" onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" value={form.password} placeholder="Contraseña" onChange={handleChange} required/>
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>

      {mensaje && <p>{mensaje}</p>}
    </Layout>
  )
}

export default Register