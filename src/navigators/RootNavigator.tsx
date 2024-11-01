import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text} from 'react-native';
import { APP_CONST } from '@constants/APP_CONSTANTS';
import { PostsList } from '@screens/post-list/PostList';
import PostDetails from '@screens/post-details/PostDetails';

interface RootNavigatorProps {}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Abc = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={APP_CONST.NAV.HOME} component={PostsList} />
      {/* <Stack.Screen name={APP_CONST.NAV.DETAILS} component={PostDetails} /> */}
    </Stack.Navigator>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="abc">
      <Drawer.Screen name="abc" component={Abc} />
      <Drawer.Screen
        name="zzz"
        component={() => {
          return <Text>zzz</Text>;
        }}
      />
    </Drawer.Navigator>
  );
};
const RootNavigator = (props: RootNavigatorProps) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={"drawer"} component={MyDrawer} />
      <Stack.Screen name={APP_CONST.NAV.DETAILS} component={PostDetails} />
    </Stack.Navigator>
  );
};

export default RootNavigator;