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
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
  },

  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 36,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    marginTop: 10, 
  },
  
  reactLogo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },

  loaderContainer: {
    marginTop: 40, // ⬅️ Se aumentó el margen superior para evitar que quede sobre el texto
  },

  circle: {
    width: 17,
    height: 17,
    borderRadius: 10,
    backgroundColor: "#2AC034",
    position: "absolute",
  },
});




