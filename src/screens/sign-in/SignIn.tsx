import {useAppDispatch} from '@hooks/AppHooks';
import {login} from '@slices/loginSlice';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const SignIn = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>{`SignIn`}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(login());
        }}>
        <Text>{`Login`}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;
