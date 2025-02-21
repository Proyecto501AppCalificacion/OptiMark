# OptiMark

OptiMark es una aplicación móvil diseñada para que los profesores puedan realizar calificaciones de exámenes físicos y agilizar la calificación de exámenes de forma manual. Este sistema permite la gestión y evaluación de los exámenes de manera eficiente, mejorando la experiencia tanto para profesores como para estudiantes.

## Tecnologías utilizadas

El proyecto está compuesto por dos partes principales: el backend (servidor) y el frontend (aplicación móvil). Las tecnologías utilizadas son las siguientes:

### Backend:

- **Python**: lenguaje de programación utilizado para desarrollar la API y lógica de negocio del servidor.
- **MySQL**: sistema de gestión de bases de datos utilizado para almacenar los datos relacionados con los exámenes y calificaciones.
- **Flask**: framework de Python para construir la API RESTful.
- **Flask-CORS**: extensión de Flask que permite manejar las solicitudes de origen cruzado (CORS).
- **mysql-connector-python**: conector de Python para interactuar con MySQL.

### Frontend:

- **React Native**: framework de JavaScript para construir aplicaciones móviles nativas.
- **Expo**: plataforma para el desarrollo de aplicaciones móviles utilizando React Native, proporcionando herramientas y servicios adicionales para facilitar el desarrollo.

## Instalación

### Clonar el repositorio
1. Ubica la ruta donde deseas clonar el repositorio en tu máquina local.
2. Ejecuta el comando:

   ```bash
   git clone https://github.com/Proyecto501AppCalificacion/OptiMark.git

### Backend

1. Navega a la carpeta del backend: cd OptiMark/backend
2. Activa el entorno virtual: venv\Scripts\activate
3. Instala las dependencias de Python: pip install mysql-connector-python flask flask-cors
4. Configura la base de datos en MySQL y realiza las migraciones necesarias si es que las hay.

### Frontend

1. Navega a la carpeta del frontend: cd OptiMark/frontend
2. Instala las dependencias con npm: npm install
3. Inicia la aplicacion de desarrollo: npn run web


## Uso

- **Backend**: el servidor se ejecuta en un puerto local, por ejemplo: `http://localhost:5000`.
- **Frontend**: la aplicación móvil puede ejecutarse en un emulador o dispositivo físico utilizando Expo.


## Dependencias

### Backend:

- **Flask**: framework web para Python.
- **Flask-CORS**: soporte para Cross-Origin Resource Sharing.
- **mysql-connector-python**: conector de Python para bases de datos MySQL.

### Frontend:

- **React Native**: framework para construir aplicaciones móviles nativas.
- **Expo**: herramienta que acelera el desarrollo y despliegue con React Native.


## Derechos reservados

**OptiMark** es propiedad exclusiva de **JC Code SAS**. Todos los derechos están reservados. No se permite la copia, distribución, modificación, uso o venta de este proyecto sin el consentimiento explícito por escrito de **JC Code SAS**.

Para consultas relacionadas con el uso del software, por favor contacta a:  
📧 **lider@jcsoftware.com.co**

