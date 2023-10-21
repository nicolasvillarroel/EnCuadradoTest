// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PacienteView from './views/PacienteView';
import PacienteLanding from './views/Paciente/PacienteLanding';
import PacienteBusqueda from './views/Paciente/PacienteBusqueda';
import AgendarHora from './views/Paciente/AgendarHora';
import ProfesionalView from './views/Profesional/ProfesionalView';
import Disponibilidad from './views/Profesional/Disponibilidad';
import ProfesionalHome from './views/Profesional/ProfesionalHome';
import AgregarServicio from './views/Profesional/AgregarServicio';
// import FormularioHorariosServicios from './views/Profesional/FormularioHorariosServicios';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/profesional">Vista del Profesional</Link> | 
        <Link to="/pacienteLanding">Vista del Paciente</Link>
      </nav>

      <Routes>
        <Route path="/profesional" element={<ProfesionalView />} />
        <Route path="/profesional/home" element={<ProfesionalHome />} />
        <Route path="/profesional/agregarservicio" element={<AgregarServicio />} />
        <Route path="/profesional/disponibilidad/:id" element={<Disponibilidad />} />
        <Route path="/paciente" element={<PacienteView />} />
        <Route path="/pacienteLanding" element={<PacienteLanding />} />
        <Route path="/pacienteBusqueda" element={<PacienteBusqueda />} />
        <Route path="/pacienteAgendarHora/:id" element={<AgendarHora />} />
        <Route path="/" element={<h1>Bienvenido a Encuadrado</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
