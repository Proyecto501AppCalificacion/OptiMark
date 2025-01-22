from flask import Flask, jsonify # type: ignore
from flask_cors import CORS # type: ignore
import mysql.connector # type: ignore

app = Flask(__name__)

# Habilitar CORS para todas las rutas
CORS(app)

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

@app.route('/api/data', methods=['GET'])
def get_data():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute('SELECT * FROM estudiantes')  # Ejecuta la consulta en MySQL
    data = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)

