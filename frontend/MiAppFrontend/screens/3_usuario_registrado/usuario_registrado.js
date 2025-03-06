import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Íconos de Expo
import styles from './usuario_registrado_estilos';

const UsuarioRegistrado = () => {
  return (
    <View style={styles.container}>
      {/* Botón de atras  */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
         <Image 
        source={require('../../assets/images/atras.png')} 
        style={styles.backIcon} 
    />
    </TouchableOpacity>

      
      {/* Título */}
      <Text style={styles.title}>Ingresa tus datos</Text>

      {/* Inputs */}
      <TextInput 
        style={styles.inputContainer} 
        placeholder="Ingresa correo electrónico" 
        placeholderTextColor="#888"
      />
      
      <View style={styles.passwordContainer}>
        <TextInput 
          style={styles.passwordInput} 
          placeholder="Contraseña" 
          placeholderTextColor="#888"
          secureTextEntry
        />
        <Ionicons name="eye-outline" style={styles.eyeIcon} />
      </View>

      {/* Botón de ingreso */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>

      {/* Restablecer contraseña */}
      <TouchableOpacity>
        <Text style={styles.resetPasswordText}>REESTABLECER CONTRASEÑA</Text>
      </TouchableOpacity>

      {/* Botones de redes sociales */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-facebook" size={20} color="#3b5998" />
          <Text style={styles.socialText}>FACEBOOK</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-google" size={20} color="#db4437" />
          <Text style={styles.socialText}>GOOGLE</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        Al registrarse en <Text style={styles.boldText}>OptiMark</Text>, acepta nuestros{' '}
        <Text style={styles.boldText}>Términos</Text> y{' '}
        <Text style={styles.boldText}>Política de privacidad</Text>.
      </Text>
    </View>
  );
};

export default UsuarioRegistrado;