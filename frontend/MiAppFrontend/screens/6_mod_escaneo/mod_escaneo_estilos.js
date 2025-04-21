
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerEncabezado: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
    },

    ordenar: {
        marginTop: 170,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#B1B1B1',
        alignSelf: 'flex-start',
        marginLeft: 20,
    },

    content: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },

    scrollContenido: {
        padding: 20,
    alignItems: 'flex-start',
    },

    descripcion: {
        fontSize: 14,
        textAlign: 'auto',
        color: '#333333',
        marginBottom: 60,
    },

    subtitulo: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginBottom: 40,
    },

    imagenEjemplo: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        marginBottom: 20,
    },

    newExamButton: {
        backgroundColor: '#040C17',
        padding: 12,
        borderRadius: 30,
        position: 'absolute',
        bottom: 100,
        right: 20,
    },

    iconoCamara: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
});
