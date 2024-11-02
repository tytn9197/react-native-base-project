import {useAppDispatch} from '@hooks/AppHooks';
import {Theme, useNavigation, useTheme} from '@react-navigation/native';
import {login} from '@slices/loginSlice';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import SignInStyle from './SignInStyle';
import { NAV } from '@constants/NAV';

const SignIn = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const {colors} = useTheme() as Theme;
  const styles = SignInStyle(colors);
  const navigation = useNavigation<any>()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(login());
        }}>
        <Text style={styles.buttonText}>{`Login`}</Text>
      </TouchableOpacity>
      <View style={{height: 40}}/>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(NAV.HELP)
        }}>
        <Text style={styles.buttonText}>{`HELP`}</Text>
      </TouchableOpacity>
      <View style={{height: 40}}/>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(NAV.ABOUT)
        }}>
        <Text style={styles.buttonText}>{`ABOUT`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
