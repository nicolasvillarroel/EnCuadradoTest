# EnCuadradoTest

## Descripción
EnCuadradoTest es una aplicación diseñada para administrar y reservar servicios profesionales. La aplicación tiene dos perspectivas principales: una para el profesional (administrador) y otra para el paciente (cliente).

### Vista del Profesional

- **ProfesionalView**: Pantalla de inicio de sesión.
- **ProfesionalHome**: Visualización de los servicios que se están ofreciendo.
- **AgregarServicio**: Permite añadir nuevos servicios.
- **Disponibilidad**: Muestra la disponibilidad horaria de cada servicio.

**Nota**: La vista profesional está pensada para el administrador de EnCuadrado. Una vez que inicia sesión con las credenciales proporcionadas, puede gestionar los servicios. Las credenciales predeterminadas son:
Usuario: encuadrado
Contraseña: enc123**456&789

markdown
Copy code
A través del panel de control, el administrador puede agregar, visualizar y eliminar servicios. Actualmente, se han predefinido cinco categorías de servicio para mayor comodidad: Psicólogo, Nutricionista, Masajista, Arquitecto y Profesor. Sin embargo, se puede adaptar según las necesidades.

### Vista del Paciente

- **PacienteLanding**: Pantalla inicial que permite al paciente indicar el tipo de servicio que busca.
- **PacienteBusqueda**: Muestra las opciones de profesionales que ofrecen el servicio deseado.
- **PacienteAgendarHora**: Permite agendar una cita basada en la disponibilidad del profesional.

Una vez que el paciente agenda una cita, la disponibilidad del profesional se actualiza automáticamente en todo el sistema.

## Funcionalidades Pendientes

- Asignar una identificación específica al paciente que realiza una reserva.
- Implementar un calendario que integre una API para considerar los días festivos.
- Permitir la reserva de múltiples horas consecutivas.
- Hostear la aplicación.
- Otros ajustes y mejoras según se requiera.

## Agradecimientos
Gracias por brindar esta oportunidad. Aunque faltó tiempo para desarrollar algunas características, fue un desafío enriquecedor trabajar en este proyecto.
