import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { getData } from './src/services/api';
import Inicio_de_app  from './screens/1_inicio_de_app/inicio_de_app';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    'Akatab-Black': require('./assets/fonts/Akatab-Black.ttf'),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!fontsLoaded || loading) {
    return (
      <View style={styles.container}>
        <Text>{!fontsLoaded ? 'Cargando fuentes...' : 'Cargando datos...'}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Inicio_de_app />
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
});


