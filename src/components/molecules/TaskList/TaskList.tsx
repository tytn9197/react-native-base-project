import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TaskListStyles from './styles';
import {ITask, Task} from '#atoms/Task/Task';
import {useAppDispatch, useAppSelector} from '#hooks/AppHooks';
import {updateTaskState} from '#slices/taskSlice';

export type ITaskList = ITask[];
export const TaskList = () => {
  // We're retrieving our state from the store
  const tasks = useAppSelector(state => {
    const tasksInOrder = [
      ...state.taskbox.tasks.filter(t => t.state === 'TASK_PINNED'),
      ...state.taskbox.tasks.filter(t => t.state !== 'TASK_PINNED'),
    ];
    const filteredTasks = tasksInOrder.filter(
      t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED',
    );
    return filteredTasks;
  });

  const {status} = useAppSelector(state => state.taskbox);
  const dispatch = useAppDispatch();

  const pinTask = (value: string) => {
    // We're dispatching the Pinned event back to our store
    dispatch(updateTaskState({id: value, newTaskState: 'TASK_PINNED'}));
  };

  const archiveTask = (value: string) => {
    // We're dispatching the Archive event back to our store
    dispatch(updateTaskState({id: value, newTaskState: 'TASK_ARCHIVED'}));
  };

  if (status === 'loading') {
    return (
      <View>
        <ActivityIndicator color={'red'} />
      </View>
    );
  }

  if (tasks?.length === 0) {
    return (
      <View>
        <Text>EMPTY</Text>
      </View>
    );
  }

  return (
    <View style={TaskListStyles.listItem}>
      <FlatList
        data={tasks}
        keyExtractor={task => task.id}
        renderItem={({item}) => (
          <Task
            key={item.id}
            task={item}
            onArchiveTask={task => archiveTask(task)}
            onPinTask={task => pinTask(task)}
          />
        )}
      />
    </View>
  );
};
