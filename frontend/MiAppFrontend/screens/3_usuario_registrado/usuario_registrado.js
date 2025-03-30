import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './usuario_registrado_estilos';

const Usuario_registrado = () => {
  return (
    <View style={styles.container}>
      {/* Botón de atrás */}
      <TouchableOpacity style={styles.backButton}>
        <Image source={require('../../assets/images/atras.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <Image source={require('../../assets/images/logo.png')} style={styles.reactLogo} />
      <Text style={styles.titlelogo}>OptiMark</Text>
      <Text style={styles.title}>INGRESA TUS DATOS</Text>

      <TextInput 
        style={styles.inputContainer} 
        placeholder="Ingresa correo electrónico" 
        placeholderTextColor="#6F6F6F"
      />
      
      <View style={styles.passwordContainer}>
        <TextInput 
          style={styles.passwordInput} 
          placeholder="Contraseña" 
          placeholderTextColor="#6F6F6F"
          secureTextEntry
        />
        <Image source={require('../../assets/images/logo_mostrar_clave.png')} style={styles.eyeIcon} />
      </View>

      {/* Botón de ingreso */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>

      {/* Restablecer contraseña */}
      <TouchableOpacity>
        <Text style={styles.resetPasswordText}>REESTABLECER CONTRASEÑA</Text>
      </TouchableOpacity>

    <View style={styles.footer}>
      <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/images/icono.facebook.png')} style={styles.socialIcon} />
            <Text style={styles.socialText}>FACEBOOK</Text>
          </TouchableOpacity>
        
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../../assets/images/icono.google.png')} style={styles.socialIcon} />
              <Text style={styles.socialText}>GOOGLE</Text>
            </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        Al registrarse en <Text style={styles.boldText}>OptiMark</Text>, acepta nuestros{' '}
        <Text style={styles.boldText}>Términos</Text> y{' '}
        <Text style={styles.boldText}>Política de privacidad</Text>.
      </Text>
    </View>
</View>
  );
};

export default Usuario_registrado;
