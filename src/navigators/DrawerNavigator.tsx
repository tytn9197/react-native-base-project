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
import {switchValue} from '@slices/loginSlice';
import {useNavigation} from '@react-navigation/native';

type DrawerParamList = {
  'Post List': undefined;
  Profile: {uerId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
};

const Drawer = createDrawerNavigator();

const Abc = () => {
  return <Text>zzz</Text>;
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation<DrawerContentComponentProps['navigation']>();
  const dispatch = useAppDispatch();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => navigation.navigate('Help')} />
      <DrawerItem
        label="Log out"
        onPress={() => {
          props.navigation.closeDrawer();
          dispatch(switchValue());
        }}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={NAV.MY_DRAWER.POST.SELF}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name={NAV.MY_DRAWER.POST.SELF} component={PostNavigator} />
      <Drawer.Screen name={NAV.MY_DRAWER.USER} component={Abc} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
