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
    top: 50, // Bajado un poco más
    left: 20,
    padding: 10,
  },

  backIcon: {
    width: 24,
    height: 24,
  },

  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 30,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#555',
  },

  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#08172D',
  },

  createAccountButton: {
    backgroundColor: '#2AC034',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },

  createAccountButtonText: {
    color: '#040C17',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  privacyText: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    position: 'absolute',
    bottom: 20, // Ahora siempre estará abajo
    width: '100%',
  },
});

