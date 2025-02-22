import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './empieza_ahora_estilos';

const Empieza_ahora = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.reactLogo} />
      <Text style={styles.title}>OptiMark</Text>
      <Text style={styles.slogan}>La forma inteligente de calificar {'\n'}exámenes</Text>


      <View style={styles.footerButtonsContainer}>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>EMPIEZA AHORA</Text>
          <Text style={styles.infoText}>REGISTRO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>YA TENGO UNA CUENTA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Empieza_ahora;
