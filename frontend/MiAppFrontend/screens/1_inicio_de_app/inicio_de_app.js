import React from 'react';  // Importa React para trabajar con componentes
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';  // Importa componentes de React Native para la interfaz
import { useFonts } from 'expo-font';  // Importa el hook useFonts de expo-font para cargar fuentes personalizadas
import styles from './inicio_de_app_estilos'; 

const Inicio_de_app = () => {  // Define el componente InicioScreen con el prop 'datos'
  // Muestra en consola los datos recibidos como prop
  
  //Cargamos la fuente personalizada
  const [fontsLoaded] = useFonts({  
    'Akatab-Black': require('../../assets/fonts/Akatab-Black.ttf'),  // Carga la fuente personalizada desde la ruta especificada
  }); 

  // Si la fuente aún no está cargada, no renderizar nada
  if (!fontsLoaded) {  
    return null;  // Retorna 'null' mientras se carga la fuente, no renderiza nada
  }
      /// prueba 3

  // prueba para ver cambios visual

  return (  // El componente renderiza la interfaz si las fuentes están cargadas
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}  // Muestra una imagen (logo)
        style={styles.reactLogo}  // Aplica el estilo para la imagen
      />
      <Text style={styles.title}>OptiMark</Text>
      <Text style={styles.slogan}>La forma inteligente de calificar {'\n'}exámenes</Text>
      
      {/* Contenedor de los botones */}
      <View style={styles.footerButtonsContainer}>  
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>EMPIEZA AHORA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>YA TENGO UNA CUENTA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Inicio_de_app;  // Exporta el componente para que pueda ser utilizado en otras partes de la aplicación









