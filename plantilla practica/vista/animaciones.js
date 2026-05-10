// Manejar la llegada de una reacción desde el servidor
function recibirReaccion(tipoReaccion) {
    const container = document.getElementById('mensajes');
    const burbuja = document.createElement('div');
    burbuja.className = 'reaccion-burbuja';
    
    // Seleccionar el icono según el tipo de reacción
    let icono = '';
    switch(tipoReaccion) {
        case 'like': icono = '👍'; break;
        case 'heart': icono = '❤️'; break;
        case 'fun': icono = '😂'; break;
        case 'sad': icono = '😢'; break;
        default: icono = '❓';
    }
    burbuja.textContent = icono;
    
    container.appendChild(burbuja);
    
    // Eliminar la burbuja después de la animación (3.25s)
    setTimeout(function() {
        if (burbuja.parentNode) {
            burbuja.parentNode.removeChild(burbuja);
        }
    }, 3250);
}
