# RappiCard - Microservicio Frontend de Captura de Datos

## 📋 Descripción
Este microservicio corresponde al frontend del formulario de captura de datos para la solicitud de la tarjeta RappiCard. El objetivo es proporcionar una interfaz intuitiva para el registro de datos personales y financieros de los usuarios.

### 🚀 Estado Actual
El formulario está diseñado para capturar datos y mostrarlos en la consola del navegador como una simulación de envío. Aún no está conectado a un backend real.

---

## 🛠️ Tecnologías Utilizadas
- **HTML5:** Estructura del formulario.  
- **CSS3:** Estilos y diseño responsivo.  
- **JavaScript (ES6):** Captura de datos y simulación de envío.  
- **http-server:** Servidor local para el frontend.  
- **Git:** Control de versiones.  

---

## 🗃️ Estructura del Proyecto
frontend-rappicard/
├── index.html # Página principal del formulario
├── css/
│ └── styles.css # Estilos del formulario
├── js/
│ └── app.js # Lógica de captura de datos
└── README.md # Archivo de documentación


## 💻 Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/Cristixndr3s/RappiCard.git
cd RappiCard/frontend-rappicard

Instalar http-server (si no lo tienes)

npm install -g http-server

Iniciar el servidor
Ejecuta el siguiente comando para iniciar el servidor:

npx http-server ./frontend-rappicard -p 8080

Abre el navegador en la siguiente dirección:


http://localhost:8080
