import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfesionalView = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (user === 'encuadrado' && pass === 'enc123**456&789') {
      console.log('Login exitoso');
      navigate('/profesional/home'); // Navega a la nueva vista
    } else {
      console.log('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <h1>Vista del Profesional</h1>

      <form onSubmit={handleLogin}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={pass}
            onChange={(event) => setPass(event.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default ProfesionalView;
