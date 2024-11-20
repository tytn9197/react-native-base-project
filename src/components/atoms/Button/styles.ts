import {createStyleSheet} from 'react-native-unistyles';

export const ButtonStyles = createStyleSheet(theme => ({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
}));
