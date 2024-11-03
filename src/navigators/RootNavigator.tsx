import React from 'react';
import {createNativeStackNavigator, NativeStackScreenProps, NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppSelector} from '@hooks/AppHooks';
import Help from '@screens/help/Help';
import AboutScreen from '@screens/about-screen/AboutScreen';
import DrawerNavigator from '@navigators/DrawerNavigator';
import PostDetails from '@screens/post-details/PostDetails';
import SignIn from '@screens/sign-in/SignIn';
import SignUp from '@screens/sign-up/SignUp';

export type RootStackParamList = {
  Help: undefined;
  About: undefined;
  'My Drawer': undefined;
  'Post Details': {id: string};
  'Sign in': undefined;
  'Sign up': undefined;
};

export type PostDetailsProps = NativeStackScreenProps<RootStackParamList, 'Post Details'>;

export type PostDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Post Details'
>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = (): React.JSX.Element => {
  const isSignedIn = useAppSelector(state => state.login.isSignedIn);

  return (
    <RootStack.Navigator>
      {/* follow this document - https://reactnavigation.org/docs/auth-flow */}
      {isSignedIn ? (
        <>
          <RootStack.Screen
            name={'My Drawer'}
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name={'Post Details'}
            component={PostDetails}
            options={{headerBackTitleVisible: false}}
          />
        </>
      ) : (
        <>
          <RootStack.Screen name={'Sign in'} component={SignIn} />
          <RootStack.Screen name={'Sign up'} component={SignUp} />
        </>
      )}
      {/* navigation key to re-render the stacks - https://reactnavigation.org/docs/group/#navigationkey */}
      <RootStack.Group navigationKey={isSignedIn ? 'user' : 'guest'}>
        <RootStack.Screen name={'Help'} component={Help} />
        <RootStack.Screen name={'About'} component={AboutScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
