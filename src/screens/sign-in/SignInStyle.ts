import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

const SignInStyle = (colors: Theme['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    title: {
      fontSize: 30,
      color: colors.text,
    },
    buttonText: {
      fontSize: 20,
      color: colors.text,
    },
  });

export default SignInStyle;
