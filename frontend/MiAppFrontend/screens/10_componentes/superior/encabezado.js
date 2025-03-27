import React from 'react';
import { View, Text, Image } from 'react-native';
import encabezadoEstilos from './encabezado_estilos';

const Encabezado = () => {
  return (
    <View style={encabezadoEstilos.encabezadoContainer}>
      <View style={encabezadoEstilos.contenedor}>
        <Image source={require('../../../assets/images/logo.png')} style={encabezadoEstilos.logo} />
        <Text style={encabezadoEstilos.titulo}>OptiMark</Text>
      </View>
    </View>
  );
};

export default Encabezado;
