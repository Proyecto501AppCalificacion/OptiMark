import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08172D',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  backButton: {
    position: 'absolute',
    top: 50, // Ajustado
    left: 20,
    padding: 10,
  },

  backIcon: {
    width: 24,
    height: 24,
  },

  title: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  inputContainer: {
    width: '90%',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#777777',
    borderRadius: 15,
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginBottom: 20, // Reducido para mejor distribución
    color: '#fff',
    fontSize: 16,
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#777777',
    borderRadius: 15,
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginBottom: 20, // Menos separación para mantener coherencia
    width: '90%',
    backgroundColor: 'transparent',
  },

  passwordInput: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
  },

  eyeIcon: {
    color: '#5A5A5A',
    fontSize: 22, 
  },

  button: {
    backgroundColor: '#2AC034',
    width: '100%', // Ajustado para mejor alineación
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20, // Espaciado uniforme
  },

  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },

  resetPasswordText: {
    color: '#2AC034',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },

  /** Pie de página mejorado */
  footer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 150,
  },

  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '48%',
  },

  socialText: {
    color: '#fff',
    marginLeft: 10,
  },

  footerText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },

  boldText: {
    fontWeight: 'bold',
  },
});

export default styles;