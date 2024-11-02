import React from 'react';
import {NAV} from '@constants/NAV';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text} from 'react-native';
import PostNavigator from '@navigators/PostNavigator';

const Drawer = createDrawerNavigator();

const Abc = () => {
  return <Text>zzz</Text>;
};

const DrawerNavigator = (): React.JSX.Element => {
  return (
    <Drawer.Navigator initialRouteName={NAV.MY_DRAWER.POST_LIST}>
      <Drawer.Screen name={NAV.MY_DRAWER.POST_LIST} component={PostNavigator} />
      <Drawer.Screen name={NAV.MY_DRAWER.USER} component={Abc} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
