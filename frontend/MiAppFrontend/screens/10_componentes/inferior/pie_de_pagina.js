import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './pie_de_pagina_estilos';

const Pie_de_pagina = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>  
        <Image source={require('../../../assets/images/logo.png')} style={styles.reactLogo} />
        <Text style={styles.title}>OptiMark</Text>
      </View>
    </View>
  );
};

export default Pie_de_pagina;
