import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './AgendarHora.css';  // Asegúrate de tener un archivo CSS con este nombre

const AgendarHora = () => {
    const navigate = useNavigate(); // Inicializar el hook
    const [selectedProfessional, setSelectedProfessional] = useState({});
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [reservationName, setReservationName] = useState("");

    useEffect(() => {
        const professional = JSON.parse(localStorage.getItem('selectedProfessional'));
        setSelectedProfessional(professional);
    }, []);

    const handleSlotClick = (dayIndex, slotIndex) => {
        if (selectedProfessional.disponibilidad[dayIndex].horarios[slotIndex].disponible) {
            setSelectedDate(selectedProfessional.disponibilidad[dayIndex].fecha);
            setSelectedSlot(slotIndex);
        }
    };

    const handleAgendarClick = () => {
        // Obtiene la lista completa de profesionales de 'servicios'
        const allProfessionals = JSON.parse(localStorage.getItem('servicios')) || [];
        
        const updatedProfessional = { ...selectedProfessional };
        const dayToUpdate = updatedProfessional.disponibilidad.find(day => day.fecha === selectedDate);
        
        if(dayToUpdate) {
            dayToUpdate.horarios[selectedSlot].disponible = false;

            const id_profesional =selectedProfessional.id;
    
            // Aquí, en lugar de buscar el índice, simplemente asignamos el updatedProfessional a la posición 0
            allProfessionals[id_profesional] = updatedProfessional;
    
            // Luego, simplemente guardamos allProfessionals de nuevo en localStorage
            localStorage.setItem('servicios', JSON.stringify(allProfessionals));
    
            // Actualizamos el localStorage con el profesional actualizado
            localStorage.setItem('selectedProfessional', JSON.stringify(updatedProfessional));
        
            // Actualiza el estado local también
            setSelectedProfessional(updatedProfessional);
        
            // Mostramos la alerta
            alert('Su hora ha sido agendada correctamente!');
        
            // Redirigimos al componente PacienteBusqueda
            navigate('/PacienteBusqueda');
        } else {
            console.error("Fecha seleccionada no encontrada en la disponibilidad del profesional");
        }
    };
    
    
    
    return (
        <div className="agendar-container">
            <h2>Agendar Hora</h2>
            <h3>Nombre del Profesional: {selectedProfessional.nombre}</h3>
            {selectedProfessional.disponibilidad && selectedProfessional.disponibilidad.map((day, dayIndex) => (
                <div key={day.fecha}>
                    <h4>{day.fecha}</h4>
                    <div className="schedule-grid">
                        {day.horarios.map((slot, slotIndex) => (
                            <div
                                key={slotIndex}
                                className={`schedule-slot ${selectedSlot === slotIndex && selectedDate === day.fecha ? 'selected' : ''} ${slot.disponible ? 'available' : 'unavailable'}`}
                                onClick={() => handleSlotClick(dayIndex, slotIndex)}
                            >
                                {slot.hora}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <input
                type="text"
                placeholder="Nombre para la reserva"
                value={reservationName}
                onChange={(e) => setReservationName(e.target.value)}
            />
            <button
                onClick={handleAgendarClick}
                disabled={!selectedSlot || !reservationName}
            >
                AGENDAR HORA
            </button>
        </div>
    );
}

export default AgendarHora;
