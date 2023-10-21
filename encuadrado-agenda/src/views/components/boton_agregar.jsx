// BotonAgregarServicio.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BotonAgregarServicio = ({navigation}) => {
  const navigate = useNavigate();

  const handleAgregarServicio = () => {
    navigate('/profesional/agregar-servicio');
  };

  return (
    <button onClick={handleAgregarServicio}>
      Agregar Servicio
    </button>
  );
};

export default BotonAgregarServicio;
