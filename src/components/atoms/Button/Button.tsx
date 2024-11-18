import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export type MyButtonProps = {
  onPress?: () => void;
  text: string;
};

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <TouchableOpacity className=' flexShrink-1 bg-yellow-500' onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
  },
  text: { color: 'white' },
});
