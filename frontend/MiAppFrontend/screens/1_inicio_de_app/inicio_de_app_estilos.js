import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      width: '100%',  // Establece el ancho del contenedor
      height: '100%',  // Establece la altura del contenedor
      flex: 1,  // Asegura que el contenedor ocupe todo el espacio disponible
      justifyContent: 'center',  // Centra el contenido en el eje vertical
      alignItems: 'center',  // Centra el contenido en el eje horizontal
      backgroundColor: '#040C17',  // Color de fondo oscuro
    },
    title: {
      fontSize: 36,  // Tamaño de fuente grande para el título
      fontFamily: 'Akatab-Black',  // Usa la fuente personalizada
      color: '#2AC034',  // Color verde para el texto
    },
    slogan: {
      fontSize: 16,  // Tamaño de fuente más pequeño para el eslogan
      fontWeight: '600',  // Peso de fuente medio
      color: '#B1B1B1',  // Color gris claro para el eslogan
      marginTop: 2,  // Espacio superior
      fontFamily: 'Akatab-Black',  // Usa la fuente personalizada
      textAlign:'center',  // Centra el texto horizontalmente
    },
    reactLogo: {
      width: 100,  // Ancho de la imagen del logo
      height: 100,  // Altura de la imagen del logo
      marginTop: 20,  // Espacio superior
    },
    
    footerButtonsContainer: {
      position: 'absolute',  // Posiciona los botones en una ubicación fija
      bottom: 30,  // Distancia desde el borde inferior de la pantalla
      width: '100%',  // Establece el contenedor con el ancho completo de la pantalla
      paddingHorizontal: 20,  // Espaciado horizontal en los bordes
      alignItems: 'center',  // Centra los botones horizontalmente
    },
    
    startButton: {
      height: 50,  // Altura del botón
      width: 333,  // Ancho del botón
      backgroundColor: '#2AC034',  // Fondo verde del botón
      borderRadius: 15,  // Bordes redondeados
      alignItems: 'center',  // Centra el texto dentro del botón horizontalmente
      justifyContent: 'center',  // Centra el texto dentro del botón verticalmente
      marginBottom: 10,  // Espacio entre el primer y segundo botón
      borderColor: '#104814'  // Color de borde verde oscuro
    },
    startButtonText: {
      color: 'black',  // Color del texto negro
      fontSize: 20,  // Tamaño de la fuente
      fontFamily: 'Akatab-Black',  // Usa la fuente personalizada para el texto
      textAlign: 'center',  // Centra el texto horizontalmente
    },
    
    loginButton: {
      height: 50,  // Altura del botón
      width: 333,  // Ancho del botón
      backgroundColor: '#040C17',  // Fondo azul oscuro del botón
      borderRadius: 15,  // Bordes redondeados
      alignItems: 'center',  // Centra el texto dentro del botón horizontalmente
      justifyContent: 'center',  // Centra el texto dentro del botón verticalmente
      borderWidth: 1,  // Añade un borde al botón
      borderColor: '#B1B1B1',  // Color gris del borde
    },
  
    loginButtonText: {
      color: '#2AC034',  // Color verde para el texto
      fontSize: 20,  // Tamaño de la fuente
      fontFamily: 'Akatab-Black',  // Usa la fuente personalizada para el texto
      textAlign: 'center',  // Centra el texto horizontalmente
    },
  });