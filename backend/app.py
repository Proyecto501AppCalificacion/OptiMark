from flask import Flask, jsonify, request  # type: ignore
from flask_cors import CORS  # type: ignore
import mysql.connector  # type: ignore

app = Flask(__name__)

# Configurar CORS para permitir solicitudes desde tu frontend (localhost:8081)
CORS(app)
       # Agrega esto si tu frontend envía cookies

# Conexión a la base de datos MySQL
def get_db_connection():
    connection = mysql.connector.connect(
        host='localhost',
        user='root',
        password='Optimark2025',
        database='optimark'
    )
    return connection

@app.route('/')
def home():
    return 'Servidor Flask funcionando correctamente'

# Ruta GET para obtener todos los exámenes
@app.route('/api/data', methods=['GET'])
def get_data():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM examenes")
    examenes = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(examenes), 200

# Ruta POST para insertar examen y preguntas
@app.route('/api/examen', methods=['POST'])
def create_examen():
    data = request.get_json()
    examen = data.get('examenData')

    if not examen:
        return jsonify({"error": "Datos de examen faltantes"}), 400

    nombre_examen = examen.get('nombre_examen')
    materia = examen.get('materia')
    colegio = examen.get('colegio')
    cantidad_preguntas = examen.get('cantidad_preguntas')
    creado_por = examen.get('creado_por')
    preguntas = data.get('preguntasData')

    if not nombre_examen:
        return jsonify({"error": "'nombre_examen' no puede ser vacío o nulo"}), 400

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute("""
        INSERT INTO examenes (nombre_examen, materia, colegio, cantidad_preguntas, creado_por)
        VALUES (%s, %s, %s, %s, %s)
    """, (nombre_examen, materia, colegio, cantidad_preguntas, creado_por))

    examen_id = cursor.lastrowid
    print(preguntas)
    for pregunta in preguntas:
        texto = pregunta.get('pregunta')
        opcion_a = pregunta.get('opcion_a')
        opcion_b = pregunta.get('opcion_b')
        opcion_c = pregunta.get('opcion_c')
        opcion_d = pregunta.get('opcion_d')
        respuesta_correcta = pregunta.get('respuesta_correcta')

        cursor.execute("""
            INSERT INTO preguntas_examen (pregunta, opcion_a, opcion_b, opcion_c, opcion_d, respuesta_correcta, examen_id)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        """, (texto, opcion_a, opcion_b, opcion_c, opcion_d, respuesta_correcta, examen_id))

    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({"message": "Examen y preguntas creados correctamente"}), 201

if __name__ == '__main__':
    app.run(debug=True)
