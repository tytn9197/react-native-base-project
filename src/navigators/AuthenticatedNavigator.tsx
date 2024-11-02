import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAV} from '@constants/NAV';
import PostDetails from '@screens/post-details/PostDetails';
import DrawerNavigator from '@navigators/DrawerNavigator';

const Stack = createNativeStackNavigator();

const renderAuthenticatedNavigator = (): React.JSX.Element => {
  return (
    <>
      <Stack.Screen
        name={NAV.MY_DRAWER.SELF}
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name={NAV.DETAILS} component={PostDetails} />
    </>
  );
};

export default renderAuthenticatedNavigator;
