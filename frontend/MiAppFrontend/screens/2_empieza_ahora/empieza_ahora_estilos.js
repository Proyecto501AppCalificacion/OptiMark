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
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
  },
  title: {
    fontSize: 36,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
  },
  slogan: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginTop: 2,
    fontFamily: theme.fonts.bold,
    textAlign: 'center',
  },
  reactLogo: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  footerButtonsContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  startButton: {
    height: 50,
    width: 333,
    backgroundColor: theme.colors.primary,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderColor: theme.colors.buttonBorder,
  },
  startButtonText: {
    color: theme.colors.black,
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    textAlign: 'center',
  },
  loginButton: {
    height: 50,
    width: 333,
    backgroundColor: theme.colors.secondary,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  loginButtonText: {
    color: theme.colors.textPrimary,
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    textAlign: 'center',
  },

  infoText: {
    color: theme.colors.black,
    fontSize: 12,
    fontFamily: theme.fonts.bold,
    textAlign: 'center',
  },
  
});