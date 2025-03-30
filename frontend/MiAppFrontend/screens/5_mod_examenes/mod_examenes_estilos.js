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
        marginTop: 100,
    },

    dateText: {
        textAlign: 'center',
    },
});
