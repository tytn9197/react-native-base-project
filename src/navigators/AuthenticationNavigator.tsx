import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '@screens/sign-in/SignIn';
import SignUp from '@screens/sign-up/SignUp';
import {NAV} from '@constants/NAV';

const Stack = createNativeStackNavigator();

const renderAuthenticationNavigator = (): React.JSX.Element => {
  return (
    <>
      <Stack.Screen name={NAV.SIGN_IN} component={SignIn} />
      <Stack.Screen name={NAV.SIGN_UP} component={SignUp} />
    </>
  );
};

export default renderAuthenticationNavigator;
