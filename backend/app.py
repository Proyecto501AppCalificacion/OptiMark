from flask import Flask, jsonify, request # type: ignore
from flask_cors import CORS # type: ignore
import mysql.connector # type: ignore

app = Flask(__name__)

# Habilitar CORS para todas las rutas y todos los orígenes
CORS(app, resources={r"/api/*": {"origins": "http://localhost:8081"}})

# Conexión a la base de datos MySQL
def get_db_connection():
    connection = mysql.connector.connect(
        host='localhost',        # Dirección del servidor MySQL
        user='root',             # Usuario de MySQL
        password='Optimark2025', # Contraseña de MySQL
        database='optimark'      # Nombre de tu base de datos
    )
    return connection

@app.route('/')
def home():
    return 'Servidor Flask funcionando correctamente'

# Ruta para obtener datos de estudiantes
@app.route('/api/data', methods=['GET'])
def get_data():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute('SELECT * FROM examenes')  # Ejecuta la consulta en MySQL
    data = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(data)

# Ruta para insertar datos en la tabla examenes
@app.route('/api/examen', methods=['POST'])
def create_examen():
    # Obtener los datos desde el cuerpo de la solicitud (JSON)
    data = request.get_json()

    # Datos que llegan desde el frontend
    nombre_examen = data.get('nombre_examen')  # Nuevo campo
    materia = data.get('materia')
    colegio = data.get('colegio')
    cantidad_preguntas = data.get('cantidad_preguntas')
    creado_por = data.get('creado_por')
    # La fecha y hora se genera automáticamente con CURRENT_TIMESTAMP, no es necesario pasarlo

    # Conexión a la base de datos
    connection = get_db_connection()
    cursor = connection.cursor()

    # Inserción de los datos en la tabla examenes
    cursor.execute("""
        INSERT INTO examenes (nombre_examen, materia, colegio, cantidad_preguntas, creado_por)
        VALUES (%s, %s, %s, %s, %s)
    """, (nombre_examen, materia, colegio, cantidad_preguntas, creado_por))

    # Guardar los cambios
    connection.commit()

    # Cerrar la conexión
    cursor.close()
    connection.close()

    return jsonify({"message": "Examen creado correctamente"}), 201  # 201 es el código para creación exitosa

if __name__ == '__main__':
    app.run(debug=True)


