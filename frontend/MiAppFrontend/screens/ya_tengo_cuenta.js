import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

const Ya_tengo_cuenta = () => {
  // ... resto del código (suponiendo que tienes más componentes aquí)

  return (
    <View style={styles.container}>
      {/* ... resto del contenido (logo, otros elementos) */}

      <View style={styles.headerButtonsContainer}>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>INGRESAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>REESTABLECER CONTRASEÑA</Text>
        </TouchableOpacity>
      </View>

      {/* ... resto del contenido */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#040C17',
  },

  headerButtonsContainer: {
    position: 'absolute', // Posicionamiento absoluto para mayor control
    top: '30%', // Ajusta este valor según sea necesario
    width: '100%', // Ocupa todo el ancho de la pantalla
    alignItems: 'center', // Centra los botones horizontalmente
  },

  startButton: {
    // Estilos para el botón "INGRESAR"
    // ...
  },

  startButtonText: {
    // Estilos para el texto del botón "INGRESAR"
    // ...
  },

  loginButton: {
    // Estilos para el botón "REESTABLECER CONTRASEÑA"
    // ...
  },

  loginButtonText: {
    // Estilos para el texto del botón "REESTABLECER CONTRASEÑA"
    // ...
  },

  // ... otros estilos
});

export default Ya_tengo_cuenta;
