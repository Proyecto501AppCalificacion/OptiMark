import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/data'; 

// Función para obtener los datos
export const getData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;  // Devuelve los datos obtenidos de la API
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
};


const POST_URL = 'http://127.0.0.1:5000/api/examen'; // debe coincidir con tu ruta Flask

export const saveExamen = async (nuevoExamen) => {
  try {
    const response = await axios.post(POST_URL, nuevoExamen);
    return response.data;
  } catch (error) {
    console.error('Error al guardar el examen:', error);
    throw error;
  }
};
