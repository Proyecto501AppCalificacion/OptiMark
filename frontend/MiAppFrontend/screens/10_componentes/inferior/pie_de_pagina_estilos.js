import { StyleSheet } from 'react-native';

const theme = {
  colors: {
    primary: "#2AC034",
    secondary: "#040C17",
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
});