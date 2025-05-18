import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Estructura general
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',     // Alinea el contenido horizontalmente al centro
    width: '100%',            // Ocupa todo el ancho disponible
  },

  containerEncabezado: {
    width: '100%',            // Asegura que tenga el mismo ancho
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    flex: 1,
    width: '100%',            // Se asegura de coincidir con el ancho total
    paddingHorizontal: 20,    // Coincide con el anterior para uniformidad
    marginTop: 100,           // Espacio debajo del encabezado
  },

  // Secciones
  section: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',            // Se alinea con el resto del diseño
  },

  sectionFila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  // Columnas
  leftColumn: {
    width: '60%',
    alignItems: 'center',
  },

rightColumn: {
  width: '35%',
  borderRadius: 10,
  padding: 10,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1, // Grosor del borde
  borderColor: '#B1B1B1', // Color del borde
  height: 130,
},


  // Títulos y textos
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    width: '100%',
  },

  descripcion: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 25,
    width: '100%',
  },

  subtituloContenedor: {
    width: '100%',            // Reemplaza el uso de screenWidth
    height: 40,
    justifyContent: 'center',
    paddingLeft: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#B1B1B1',
    alignSelf: 'center',
  },

  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },

  cajaTitulo: {
    fontSize: 12,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },

  numeroGrande: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },

  // Imágenes
  imagenGrafico: {
    width: '100%',
    height: 150,
  },

  imagenPie: {
    width: 180,
    height: 180,
  },
});



