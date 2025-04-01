import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import encabezadoEstilos from './encabezado_estilos';

const Encabezado = ({ onLogout }) => {
  return (
    <SafeAreaView style={encabezadoEstilos.encabezadoContainer}>
      <View style={encabezadoEstilos.contenedor}>
        
        {/* Botón de Cerrar sesión */}
        <TouchableOpacity onPress={onLogout} style={encabezadoEstilos.botonCerrarSesion}>
          <Text style={encabezadoEstilos.textoCerrarSesion}>Cerrar sesión</Text>
        </TouchableOpacity>

        {/* Contenedor de logo y título */}
        <View style={encabezadoEstilos.logoContainer}>
          <Image source={require('../../../assets/images/logo.png')} style={encabezadoEstilos.logo} />
          <Text style={encabezadoEstilos.titulo}>OptiMark</Text>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Encabezado;