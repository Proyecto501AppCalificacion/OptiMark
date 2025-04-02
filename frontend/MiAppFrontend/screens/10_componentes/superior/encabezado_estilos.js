import { StyleSheet } from 'react-native';

const encabezadoEstilos = StyleSheet.create({
  encabezadoContainer: {
    width: '100%',
    backgroundColor: '#040C17',
    paddingTop: 50, // Espacio para notch en iOS
    paddingBottom: 25,
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
    marginTop: 35, // Aumenté este valor de 15 a 35 para mover el logo hacia abajo
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 5, // Espacio entre el logo y el texto
  },
  titulo: {
    color: '#2AC034',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botonCerrarSesion: {
    position: 'absolute', // Posición absoluta para que no afecte la distribución del contenido
    right: 20, // 20 unidades de espacio desde la derecha
    top: 10, // 10 unidades de espacio desde la parte superior
    backgroundColor: '#FFFFFF',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  textoCerrarSesion: {
    color: '#040C17',
    fontSize: 12, // Aumenté ligeramente el tamaño del texto para hacerlo más legible
    fontWeight: 'bold',
  },
});

export default encabezadoEstilos;