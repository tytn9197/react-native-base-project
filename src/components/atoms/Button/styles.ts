import {createStyleSheet} from 'react-native-unistyles';

export const ButtonStyles = createStyleSheet(theme => ({
  container: (isDisable: boolean) => ({
    paddingHorizontal: 20,
    paddingVertical: 11,
    backgroundColor: isDisable? "#00000059" : "#7C5CF6",
    borderRadius: 10,
    flexShrink: 1
  }),
  text: (isDisable: boolean) => ({
    color: isDisable? '#FFFFFF59' : 'white',
    fontSize: 14,
    flexShrink: 1
  }),
}));