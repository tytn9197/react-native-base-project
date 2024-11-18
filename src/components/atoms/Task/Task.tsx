import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import TaskStyles from './styles';

export type ITask = {
  id: string;
  title: string;
  state: string;
};

export const Task = ({
  task: {id, title, state},
  onArchiveTask,
  onPinTask,
}: {
  task: ITask;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}) => {
  return (
    <View key={id} style={TaskStyles.listItem}>
      <TouchableOpacity onPress={() => onArchiveTask(id)}>
        {<Text>{state === 'TASK_ARCHIVED' ? 'ARCHIVED' : 'archive'}</Text>}
      </TouchableOpacity>
      <View style={{width: 20}} />
      <Text>{title}</Text>
      <View style={{width: 20}} />
      <TouchableOpacity onPress={() => onPinTask(id)}>
        {<Text>{state === 'TASK_PINNED' ? 'PINNED' : 'pin'}</Text>}
      </TouchableOpacity>
    </View>
  );
};
