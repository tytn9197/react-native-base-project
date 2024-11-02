import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {nanoid} from '@reduxjs/toolkit';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/AppHooks';
import { postAdded, selectPostById } from '@slices/postSlice';
import { NAV } from '@constants/NAV';

export const PostsList = () => {
  // Select the `state.posts` value from the store into the component
  const posts = useAppSelector(state => state.posts);
  const postId = "1"
  const postFound = useAppSelector(state => selectPostById(state, postId))

  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>()

  const [content, setContent] = useState('');

  const renderedPosts = posts.map(post => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(NAV.DETAILS, {id: post.id})
      }}
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
    </TouchableOpacity>
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
          dispatch(postAdded("tytn", content));
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <Text>{`Post founded Content: ${postFound?.content}`}</Text>
    </SafeAreaView>
  );
};
