import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ButtonStyles} from './styles';
import {useStyles} from 'react-native-unistyles';
import {MyButtonProps} from './types';

export const MyButton = ({onPress, text}: MyButtonProps) => {
  const {styles} = useStyles(ButtonStyles);
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
