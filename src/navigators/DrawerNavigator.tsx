import React from 'react';
import {NAV} from '@constants/NAV';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {Text} from 'react-native';
import PostNavigator from '@navigators/PostNavigator';
import {useAppDispatch} from '@hooks/AppHooks';
import {logout} from '@slices/loginSlice';
import {useNavigation} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const Abc = () => {
  return <Text>zzz</Text>;
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => navigation.navigate(NAV.HELP)} />
      <DrawerItem label="Log out" onPress={() => dispatch(logout())} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={NAV.MY_DRAWER.POST.SELF}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={NAV.MY_DRAWER.POST.SELF} component={PostNavigator} />
      <Drawer.Screen name={NAV.MY_DRAWER.USER} component={Abc} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
