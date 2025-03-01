import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './pantalla_de_carga_estilos';
import Loader from './loader';

const Pantalla_de_carga = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>  
        <Image source={require('../../assets/images/logo.png')} style={styles.reactLogo} />
        <Text style={styles.title}>OptiMark</Text>
        <Loader />
      </View>
    </View>
  );
};

export default Pantalla_de_carga;


