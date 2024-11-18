import { PostDetailsProps, PostDetailsScreenNavigationProp } from '#navigators/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const PostDetails = (props: PostDetailsProps) => {
  const {id} = props.route.params;

  const navigation = useNavigation<PostDetailsScreenNavigationProp>()
  const a = () => {
    // navigation.push()
  }
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>{`POST DETAIL ${id}`}</Text>
    </SafeAreaView>
  );
};

export default PostDetails;
