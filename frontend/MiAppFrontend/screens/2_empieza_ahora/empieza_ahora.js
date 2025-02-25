import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './empieza_ahora_estilos';

const Empieza_ahora = () => {
    return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image 
          source={require('../../assets/images/atras.png')} 
          style={styles.backIcon} 
        />
      </TouchableOpacity>

      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>OptiMark</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.sectionTitle}>Datos para el registro</Text>
        <TextInput placeholder="Nombre completo" placeholderTextColor="#B1B1B1" style={styles.input} />
        <TextInput placeholder="Ingresa correo electrónico" placeholderTextColor="#B1B1B1" style={styles.input} />
        <TextInput placeholder="Confirmar correo electrónico" placeholderTextColor="#B1B1B1" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.sectionTitle}>Datos personales</Text>
        <TextInput placeholder="Teléfono móvil" placeholderTextColor="#B1B1B1" style={styles.input} />
        <TextInput placeholder="Cédula" placeholderTextColor="#B1B1B1" style={styles.input} />
        <TextInput placeholder="Contraseña" placeholderTextColor="#B1B1B1" secureTextEntry={true} style={styles.input} />
        <TextInput placeholder="Confirmar contraseña" placeholderTextColor="#B1B1B1" secureTextEntry={true} style={styles.input} />
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountButtonText}>CREAR CUENTA</Text>
        </TouchableOpacity>

      </View>
      
      <Text style={styles.privacyText}>
        Al registrarse en OptiMark, acepta nuestros <Text style={styles.privacyBold}>Términos</Text> y <Text style={styles.privacyBold}>Política de privacidad</Text>.
      </Text>
    </View>
  );
};

export default Empieza_ahora;


