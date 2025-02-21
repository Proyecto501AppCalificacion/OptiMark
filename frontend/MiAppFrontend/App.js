import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { getData } from './src/services/api';  // Importamos la función de obtener datos
import InicioScreen from './screens/1_inicio_de_app/inicio_de_app';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Llamada a la API cuando se monta el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);  // Establecer los datos obtenidos en el estado
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);  // Dejar de mostrar el estado de carga
      }
    };

    fetchData();
  }, []);

  // Si estamos cargando los datos, mostramos un mensaje de carga
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Cargando datos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <InicioScreen/>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
  },
});
