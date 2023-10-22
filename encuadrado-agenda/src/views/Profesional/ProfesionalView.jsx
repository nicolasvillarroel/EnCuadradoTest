import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfesionalView.css';

const ProfesionalView = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [errorMsg, setErrorMsg] = useState('');  
  const navigate = useNavigate();
  

  const handleLogin = (event) => {
    event.preventDefault();
    if (user === 'encuadrado' && pass === 'enc123**456&789') {
      console.log('Login exitoso');
      navigate('/profesional/home');
    } else {
      console.log('Credenciales incorrectas');
      setErrorMsg('Credenciales incorrectas');  
    }
  };

  return (
    <div className="divLogin">  {/* Añade una clase para centrar el contenido */}
      <h1>ADMINISTRADOR ENCUADRADO</h1>

      <form onSubmit={handleLogin}>
          <label className='labelLogin'>Usuario:</label>
          <input
            type="text"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
          <label className='labelLogin'>Contraseña:</label>
          <input
            type="password"
            value={pass}
            onChange={(event) => setPass(event.target.value)}
          />
        <button className='buttonLogin' type="submit">INICIAR SESIÓN COMO ADMIN</button>
      </form>
      {errorMsg && <p className='pLogin'>{errorMsg}</p>}  
    </div>
  );
};

export default ProfesionalView;
