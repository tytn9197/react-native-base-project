import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppSelector} from '@hooks/AppHooks';
import Help from '@screens/help/Help';
import AboutScreen from '@screens/about-screen/AboutScreen';
import {NAV} from '@constants/NAV';
import renderAuthenticatedNavigator from '@navigators/AuthenticatedNavigator';
import renderAuthenticationNavigator from '@navigators/AuthenticationNavigator';

interface RootNavigatorProps {}

const Stack = createNativeStackNavigator();

const RootNavigator = (props: RootNavigatorProps): React.JSX.Element => {
  const isSignedIn = useAppSelector(state => state.login.isSignedIn);

  return (
    <Stack.Navigator>
      {/* follow this document - https://reactnavigation.org/docs/auth-flow */}
      {isSignedIn
        ? renderAuthenticatedNavigator()
        : renderAuthenticationNavigator()}
      {/* navigation key to re-render the stacks - https://reactnavigation.org/docs/group/#navigationkey */}
      <Stack.Group navigationKey={isSignedIn ? 'user' : 'guest'}>
        <Stack.Screen name={NAV.HELP} component={Help} />
        <Stack.Screen name={NAV.ABOUT} component={AboutScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigator;
