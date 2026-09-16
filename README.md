# Microservicio de Reacciones con WebSockets (STOMP)

> Servicio de reacciones en tiempo real con WebSockets (STOMP): varios usuarios envían "likes" y reacciones animadas mientras escuchan una canción.

**🇪🇸 Español:** Backend en Spring Boot con WebSocket + STOMP que retransmite reacciones (likes, corazones, risas, etc.) a todos los clientes conectados. El frontend en JavaScript vanilla muestra animaciones de burbujas flotantes y usa SockJS como respaldo de compatibilidad.

**🇺🇸 English:** A Spring Boot WebSocket (STOMP) service that broadcasts live reactions (likes, hearts, laughs) to every connected client. The vanilla-JS frontend renders floating-bubble animations and uses SockJS for browser compatibility.

---

Este proyecto es un sistema de comunicación en tiempo real que permite a múltiples usuarios enviar "reacciones" (likes, corazones, risas, etc.) mientras escuchan una canción. El servidor retransmite estas reacciones a todos los clientes conectados, quienes las visualizan mediante animaciones de burbujas flotantes.

## 🚀 Tecnologías Utilizadas

### Backend
- **Java / Spring Boot**: Framework principal para el servidor.
- **Spring WebSocket**: Soporte para comunicación bidireccional.
- **STOMP**: Protocolo de mensajería sobre WebSockets.
- **SockJS**: Biblioteca para garantizar compatibilidad con navegadores que no soportan WebSockets de forma nativa.
- **Maven**: Gestión de dependencias y construcción del proyecto.

### Frontend
- **HTML5 / CSS3**: Estructura y animaciones (Keyframes).
- **JavaScript (Vanilla)**: Lógica de conexión y manipulación del DOM.
- **FontAwesome**: Iconografía para las reacciones.
- **SockJS & STOMP.js**: Clientes para la comunicación con el servidor.

## 📁 Estructura del Proyecto

```text
reacciones/
├── servidorchat/              # Proyecto Spring Boot
│   ├── src/main/java/...      # Código fuente (Configuración y Controladores)
│   ├── src/main/resources/    # Configuración de la aplicación
│   └── pom.xml                # Dependencias de Maven
├── vista/                     # Interfaz de usuario (Cliente)
│   ├── index.html             # Página principal
│   ├── estilos.css            # Estilos y animaciones
│   ├── funciones.js           # Lógica de conexión WebSocket
│   └── animaciones.js         # Lógica visual de las burbujas
└── README.md                  # Documentación
```

## 🛠️ Instalación y Ejecución

### 1. Servidor (Backend)
1. Navega a la carpeta `servidorchat`.
2. Asegúrate de tener instalado Java 17+ y Maven.
3. Ejecuta el servidor usando el comando:
   ```bash
   mvn spring-boot:run
   ```
4. El servidor estará disponible en `http://localhost:5000`.

### 2. Cliente (Frontend)
1. Abre el archivo `vista/index.html` en cualquier navegador web moderno.
   - *Nota: Puedes usar "Live Server" en VS Code para una mejor experiencia.*
2. Abre múltiples pestañas o ventanas del navegador para simular varios usuarios.

## 📖 Instrucciones de Uso
1. Haz clic en el botón **"Conectar"** para establecer la conexión con el servidor.
2. Una vez conectado, haz clic en cualquiera de los iconos de reacción (👍, ❤️, 😂, 😢).
3. Verás una animación de la reacción subiendo por la pantalla en todas las ventanas del navegador que estén conectadas.
4. Haz clic en **"Desconectar"** para cerrar la sesión.

## 👥 Roles y Responsabilidades
- **Julian Camacho**: Responsable completo del proyecto (Arquitectura, Backend, Frontend y Documentación).

