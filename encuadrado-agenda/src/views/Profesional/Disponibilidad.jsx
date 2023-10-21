import React, { useState, useEffect } from 'react';
import './Disponibilidad.css';

const Disponibilidad = ({ servicios = [] }) => {
    const [selectedProfessional, setSelectedProfessional] = useState(null);
    
    useEffect(() => {
        const profesionales = JSON.parse(localStorage.getItem('servicios')) || [];
        const id = window.location.pathname.split('/').pop(); // Aquí obtenemos el ID desde la URL
        const profesionalSeleccionado = profesionales[id];
        
        if (profesionalSeleccionado) {
            setSelectedProfessional(profesionalSeleccionado);
        }
    }, []);

    return (
        <div className="disponibilidad-container">
            <h1>Disponibilidad de {selectedProfessional?.nombre}</h1>
            {selectedProfessional?.disponibilidad.map((dia, index) => (
                <div key={index} className="dia-disponibilidad">
                    <h2>{dia.fecha}</h2>
                    {dia.horarios.map((hora, idx) => (
                        <span key={idx} className={hora.disponible ? "hora-disponible" : "hora-no-disponible"}>
                            {hora.hora}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Disponibilidad;
