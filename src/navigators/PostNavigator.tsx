import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAV} from '@constants/NAV';
import {PostsList} from '@screens/post-list/PostList';

const Stack = createNativeStackNavigator();

const PostNavigator = (): React.JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAV.MY_DRAWER.POST_LIST} component={PostsList} />
      {/* <Stack.Screen name={APP_CONST.NAV.DETAILS} component={PostDetails} /> */}
    </Stack.Navigator>
  );
};

export default PostNavigator;
