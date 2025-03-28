import { StyleSheet } from 'react-native';

//tabBar: Asegura la alineación de los iconos y etiquetas en una fila.

//tabItem: Centra cada icono y su texto.

//icon: Define el tamaño y color de los iconos.

// labelStyle: Aplica estilo al texto debajo de los iconos.
const styles = StyleSheet.create({
  tabBar: {
      position: 'absolute', // Lo mantiene fijo en la parte inferior
      bottom: 0,
      left: 0,
      right: 0,
      height: 70, // Ajusta la altura según sea necesario
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-around', // Distribuye los iconos equitativamente
      alignItems: 'center',
      borderTopWidth: 1, // Línea superior para separarlo del contenido
      borderTopColor: '#E0E0E0', // Color de la línea superior
      paddingBottom: 10, // Espaciado inferior para mejor visibilidad
  },
  tabItem: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1, // Cada elemento ocupa el mismo espacio
  },
  tabItemActive: {
      transform: [{ scale: 1.1 }], // Efecto de escala cuando está activo
  },
  icon: {
      width: 24,
      height: 24,
      marginBottom: 5, // Espaciado entre el icono y el texto
  },
  iconActive: {
      tintColor: '#2AC034', // Color verde cuando está activo
  },
  iconInactive: {
      tintColor: '#B1B1B1', // Color gris cuando está inactivo
  },
  labelStyle: {
      fontSize: 12,
      fontWeight: '500',
  },
  labelActive: {
      color: '#2AC034', // Texto en verde cuando está activo
  },
  labelInactive: {
      color: '#B1B1B1', // Texto en gris cuando está inactivo
  },
});

export default styles;