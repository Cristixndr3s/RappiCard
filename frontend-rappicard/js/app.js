const form = document.getElementById('rappicardForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = {
        nombre: document.getElementById('nombre').value,
        telefono: document.getElementById('telefono').value,
        email: document.getElementById('email').value,
        ingresos: parseFloat(document.getElementById('ingresos').value),
        egresos: parseFloat(document.getElementById('egresos').value)
    };

    // Simulación de envío: Mostrar datos en la consola
    console.log("Datos capturados:", data);

    // Mostrar mensaje en la interfaz
    responseMessage.textContent = 'Datos capturados exitosamente (simulación).';
    responseMessage.style.color = 'green';

    // Limpiar el formulario después de enviar
    form.reset();
});
