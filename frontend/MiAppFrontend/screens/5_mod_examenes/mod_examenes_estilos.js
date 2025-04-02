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
    },

    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: '90%',
    },

    datePickerContainer: {
        flex: 0.3,
        height: 40,
        borderWidth: 1,
        borderColor: '#B1B1B1',
        borderRadius: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    searchInput: {
        borderWidth: 1,
        borderColor: '#B1B1B1',
        borderRadius: 5,
        padding: 10,
        flex: 1,
        marginLeft: 15,
    },

    newExamButton: {
        backgroundColor: '#040C17',
        padding: 10,
        borderRadius: 5,
        position: 'absolute',
        bottom: 100,
        alignSelf: 'center',
        width: '70%',
    },

    newExamText: {
        color: '#2AC034',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    ordenar: {
        marginTop: 60,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#B1B1B1',
        alignSelf: 'flex-start',
        marginLeft: 20,
    },

    content: {
        width: '100%',
        alignItems: 'center',
        marginTop: 130,
    },

    dateText: {
        textAlign: 'center',
    },

    /*** ESTILOS PARA EL MODAL ***/
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Reduce la opacidad (antes era 0.5 o más)
        justifyContent: 'center',
        alignItems: 'center',
    },    

    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5, // Sombra en Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#040C17',
    },

    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#B1B1B1',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
    },

    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },

    cancelButton: {
        backgroundColor: '#B1B1B1',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
    },

    cancelButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    saveButton: {
        backgroundColor: '#2AC034',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginLeft: 5,
        alignItems: 'center',
    },

    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

