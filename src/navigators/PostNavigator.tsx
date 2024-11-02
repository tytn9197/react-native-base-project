import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAV} from '@constants/NAV';
import {PostsList} from '@screens/post-list/PostList';
import PostDetails from '@screens/post-details/PostDetails';

const Stack = createNativeStackNavigator();

const PostNavigator = (): React.JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAV.MY_DRAWER.POST.POST_LIST} component={PostsList} options={{headerShown: false}}/>
      {/* <Stack.Screen name={NAV.POST_DETAILS} component={PostDetails} /> */}
    </Stack.Navigator>
  );
};

export default PostNavigator;
