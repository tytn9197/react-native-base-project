import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const PostDetails = (props: any) => {
  const {id} = props.route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>{`POST DETAIL ${id}`}</Text>
    </SafeAreaView>
  );
};

export default PostDetails;
