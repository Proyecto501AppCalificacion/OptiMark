import { StyleSheet } from 'react-native';

const encabezadoEstilos = StyleSheet.create({
  encabezadoContainer: {
    width: '100%',
    backgroundColor: '#0A1F44',
    paddingTop: 40, // Espacio para notch en iOS
    paddingBottom: 10,
    alignItems: 'center',
    position: 'absolute', // Fijado en la parte superior
    top: 0, // Alineado arriba de la pantalla
    left: 0,
    right: 0,
    zIndex: 1000, // Asegura que esté por encima de otros elementos
  },
  contenedor: {
    width: '100%',
    flexDirection: 'column', // Coloca los elementos en una columna (logo y texto debajo)
    alignItems: 'center', // Alinea todos los elementos al centro
    justifyContent: 'center', // Centra el contenido verticalmente
    position: 'relative', // Para que el botón de cerrar sesión se pueda posicionar fuera del flujo normal
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center', // Centra el logo y el texto
    marginTop: 15, // Espacio entre el logo y el texto
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 5, // Espacio entre el logo y el texto
  },
  titulo: {
    color: '#00FF00',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botonCerrarSesion: {
    position: 'absolute', // Posición absoluta para que no afecte la distribución del contenido
    right: 20, // Ubicado en la esquina derecha
    top: -15, // Lo coloca más arriba del logo
    backgroundColor: '#FF3B30',
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 4,
  },
  textoCerrarSesion: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default encabezadoEstilos;