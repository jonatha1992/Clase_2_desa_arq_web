// Evento onclick en el nombre
document.addEventListener('DOMContentLoaded', function () {
    var nombre = document.getElementById('mi-nombre');
    if (nombre) {
        nombre.onclick = function () {
            alert('¡Hola! Soy Jonathan Gabriel Correa.');
        };
    }

    // Evento onmouseover en el párrafo
    var parrafo = document.getElementById('parrafo-sobre-mi');
    if (parrafo) {
        parrafo.onmouseover = function () {
            parrafo.style.color = '#e67e22';
        };
        parrafo.onmouseout = function () {
            parrafo.style.color = '';
        };
    }
});
