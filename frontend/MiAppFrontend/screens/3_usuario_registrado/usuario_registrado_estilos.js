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
    inputbackground: "#08172D",
  },
  fonts: {
    bold: 'Akatab-Black',
  },
};

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: theme.colors.secondary,
    width: '100%',
  },

  formContainer: {
    flex: 1, // Empuja los términos hacia abajo
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  inputContainer: {
    width: '100%', 
    maxWidth: 400, 
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

  logo: {
    width: 60, // Aumentado para mejor visibilidad
    height: 60,
    marginBottom: 10,
  },

  title: {
    fontSize: 30,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: theme.colors.textSecondary, // Ahora usa el color del tema
  },

  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 17, // Más redondeado
    paddingHorizontal: 15,
    marginBottom: 12,
    backgroundColor: theme.colors.inputbackground,
    color: theme.colors.border,
  },

  createAccountButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10, // Más estilizado
    marginTop: 20,
    alignItems: 'center',
  },

  createAccountButtonText: {
    color: theme.colors.secondary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  privacyText: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    position: 'absolute',
    bottom: 20, // Siempre estará abajo
    width: '100%',
  },
});
