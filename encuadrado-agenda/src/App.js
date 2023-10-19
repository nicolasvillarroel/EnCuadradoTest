// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PacienteView from './views/PacienteView';
import ProfesionalView from './views/Profesional/ProfesionalView';
import ProfesionalHome from './views/Profesional/ProfesionalHome';
import FormularioHorariosServicios from './views/Profesional/FormularioHorariosServicios';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/profesional">Vista del Profesional</Link> | 
        <Link to="/paciente">Vista del Paciente</Link>
      </nav>

      <Routes>
        <Route path="/profesional" element={<ProfesionalView />} />
        <Route path="/profesional/home" element={<ProfesionalHome />} />
        <Route path="/profesional/formulario" element={<FormularioHorariosServicios />} />
        <Route path="/paciente" element={<PacienteView />} />
        <Route path="/" element={<h1>Bienvenido a Encuadrado</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
