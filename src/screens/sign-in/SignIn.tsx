import {useAppDispatch} from '@hooks/AppHooks';
import {Theme, useTheme} from '@react-navigation/native';
import {login} from '@slices/loginSlice';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import SignInStyle from './SignInStyle';

const SignIn = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const {colors} = useTheme() as Theme;
  const styles = SignInStyle(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`SignIn`}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(login());
        }}>
        <Text style={styles.buttonText}>{`Login`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
