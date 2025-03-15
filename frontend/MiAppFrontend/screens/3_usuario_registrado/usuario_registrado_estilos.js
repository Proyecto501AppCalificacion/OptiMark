import { StyleSheet } from 'react-native';

const theme = {
  colors: {
    primary: "#2AC034",
    secondary: "#040C17",
    textPrimary: "#2AC034",
    textSecondary: "#B1B1B1",
    border: "#B1B1B1",
    buttonBorder: "#104814",
    black: "black",
  },
  fonts: {
    bold: 'Akatab-Black',
  },
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.secondary,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 120, // Sube el grupo de entrada
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
  },

  formContainer: {
    flexGrow: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%',
  },
  

  backIcon: {
    width: 24,
    height: 24,
  },

  title: {
    textAlign: 'center',
    color: theme.colors.textSecondary,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15, // Espacio antes del primer input
  },

  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 15,
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginBottom: 10, // Reduce separación con los demás campos
    color: theme.colors.textSecondary,
    fontSize: 16,
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 15,
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginBottom: 10, // Reduce separación
    width: '100%',
  },

  passwordInput: {
    flex: 1,
    color: theme.colors.textSecondary,
    fontSize: 16,
  },

  eyeIcon: {
    width: 20,
    height: 20,
    color: theme.colors.primary,
  },

  button: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10, // Reduce separación con los campos
  },

  buttonText: {
    color: theme.colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },

  resetPasswordText: {
    color: theme.colors.textPrimary,
    fontSize: 14,
    marginTop: 10, // Reduce separación con el botón
    textAlign: 'center',
  },

  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10, // Reducir el espacio extra
    marginBottom: 10,
  },
  

  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '48%',
  },

  socialIcon: {
    width: 24,
    height: 24,
  },

  socialText: {
    color: theme.colors.textSecondary,
    marginLeft: 10,
  },

  footerText: {
    color: theme.colors.textSecondary,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },

  boldText: {
    fontWeight: 'bold',
  },

  inputGroup: {
    width: '100%',
    borderWidth: 2,
    borderColor: theme.colors.border,
    borderRadius: 15,
    paddingHorizontal: 18,
    marginBottom: 20,
    backgroundColor: theme.colors.secondary,
  },

  inputField: {
    color: theme.colors.textSecondary,
    fontSize: 16,
    paddingVertical: 12,
  },

  inputDivider: {
    height: 1,
    backgroundColor: theme.colors.border,
    width: '100%',
  },


  
});



export default styles;


