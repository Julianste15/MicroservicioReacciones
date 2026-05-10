// Variable global para el cliente STOMP
let clienteChat = null;

// Habilita/deshabilita botones de conexión
function setConectado(conectado) {
    document.getElementById('btnConectar').disabled = conectado;
    document.getElementById('btnDesconectar').disabled = !conectado;
}

// Conectar al servidor WebSocket
function conectar() {
    const socket = new SockJS('http://localhost:5000/ws');
    clienteChat = Stomp.over(socket);
    clienteChat.connect({}, function(frame) {
        console.log('Conectado: ' + frame);
        setConectado(true);
        // Suscribirse al canal de reacciones
        clienteChat.subscribe('/brokerDeReacciones/reaccionesPorCancion', function(mensaje) {
            recibirReaccion(mensaje.body);
        });
    }, function(error) {
        alert('Error de conexión: ' + error);
    });
}

// Desconectar del servidor
function desconectar() {
    if (clienteChat !== null) {
        clienteChat.disconnect(function() {
            setConectado(false);
            console.log('Desconectar');
        });
        clienteChat = null;
    }
}

// Enviar reacción al servidor (invocado desde los iconos)
function enviarReactionServidor(event) {
    const icon = event.target;
    const reaccion = icon.dataset.reaction;
    
    // Efecto visual local: sombra dorada temporal
    icon.classList.add('gold-glow');
    setTimeout(() => icon.classList.remove('gold-glow'), 300);

    if (clienteChat && clienteChat.connected) {
        clienteChat.send("/app/enviarReaccion", {}, reaccion);
    } else {
        alert("No estás conectado.");
    }
}