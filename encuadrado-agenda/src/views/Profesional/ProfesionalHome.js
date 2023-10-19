// ProfesionalHome.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProfesionalHome = () => {
  return (
    <div>
      <h1>Bienvenido, Profesional</h1>
      <p>Desde aquí puedes gestionar tus horarios de atención y los servicios que ofreces.</p>
      
      <Link to="/profesional/formulario">Ir al formulario de horarios y servicios</Link>
    </div>
  );
};

export default ProfesionalHome;
