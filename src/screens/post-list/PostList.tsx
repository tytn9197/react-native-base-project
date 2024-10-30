import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/AppHooks';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Post, postAdded} from '../../redux/slices/postSlice';
import {nanoid} from '@reduxjs/toolkit';

export const PostsList = () => {
  // Select the `state.posts` value from the store into the component
  const posts = useAppSelector(state => state.posts);

  const dispatch = useAppDispatch();

  const [content, setContent] = useState('');

  const renderedPosts = posts.map(post => (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        margin: 5,
        padding: 5,
      }}
      key={post.id}>
      <Text>{`Title: ${post.title}`}</Text>
      <Text>{`Content: ${post.content}`}</Text>
    </View>
  ));

  return (
    <SafeAreaView style={{flex: 1, margin: 25, alignItems: 'center'}}>
      <Text>POST</Text>
      {renderedPosts}
      <Text>CONTENT: </Text>
      <TextInput
        style={{
          width: '100%',
          height: 200,
          borderColor: 'black',
          borderWidth: 1,
          margin: 5,
          padding: 5,
        }}
        multiline
        value={content}
        onChangeText={setContent}
      />
      <TouchableOpacity
        onPress={() => {
          const newPost: Post = {
            id: nanoid(),
            title: 'tytn',
            content,
          };
          dispatch(postAdded(newPost));
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
