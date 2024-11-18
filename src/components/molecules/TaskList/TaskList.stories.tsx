
import { TaskList } from './TaskList';
import { Default as TaskStory } from '#atoms/Task/Task.stories';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import type { Meta, StoryObj } from '@storybook/react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { ITask } from '#atoms/Task/Task';

// A super-simple mock of the state of the store
const MockedState = {
  tasks: [
    { ...TaskStory.args.task, id: '1', title: 'Task 1' },
    { ...TaskStory.args.task, id: '2', title: 'Task 2' },
    { ...TaskStory.args.task, id: '3', title: 'Task 3' },
    { ...TaskStory.args.task, id: '4', title: 'Task 4' },
    { ...TaskStory.args.task, id: '5', title: 'Task 5' },
    { ...TaskStory.args.task, id: '6', title: 'Task 6' },
  ],
  status: 'idle',
  error: null,
};

// A super-simple mock of a redux store
const Mockstore = ({ taskboxState, children }: {taskboxState: {tasks: ITask[],status:string, error: string | null}, children: React.JSX.Element}) => (
  <Provider
    store={configureStore({
      reducer: {
        taskbox: createSlice({
          name: 'taskbox',
          initialState: taskboxState,
          reducers: {
            updateTaskState: (state, action) => {
              const { id, newTaskState } = action.payload;
              const task = state.tasks.findIndex((task) => task.id === id);
              if (task >= 0) {
                state.tasks[task].state = newTaskState;
              }
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

const meta = {
  component: TaskList,
  title: 'Molecules/TaskList',
  decorators: [
    (Story) => (
      <View style={{ padding: 42, flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    onPinTask: { action: 'onPinTask' },
    onArchiveTask: { action: 'onArchiveTask' },
  },
} satisfies Meta<typeof TaskList>;

export default meta
export const Default = {
  decorators: [
    (story) => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>,
  ],
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in Task.stories.js.
    tasks: [
      { ...TaskStory.args.task, id: '1', title: 'Task 1' },
      { ...TaskStory.args.task, id: '2', title: 'Task 2' },
      { ...TaskStory.args.task, id: '3', title: 'Task 3' },
      { ...TaskStory.args.task, id: '4', title: 'Task 4' },
      { ...TaskStory.args.task, id: '5', title: 'Task 5' },
      { ...TaskStory.args.task, id: '6', title: 'Task 6' },
    ],
  },
} satisfies StoryObj<typeof TaskList>;

export const WithPinnedTasks = {
  decorators: [
    (story) => {
      const pinnedtasks = [
        ...MockedState.tasks.slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
      ];

      return (
        <Mockstore
          taskboxState={{
            ...MockedState,
            tasks: pinnedtasks,
          }}
        >
          {story()}
        </Mockstore>
      );
    },
  ],
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
  },
} satisfies StoryObj<typeof TaskList>;

export const Loading = {
  decorators: [
    (story) => (
      <Mockstore
        taskboxState={{
          ...MockedState,
          status: 'loading',
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
  args: {
    tasks: [],
    loading: true,
  },
} satisfies StoryObj<typeof TaskList>;

export const Empty = {
  decorators: [
    (story) => (
      <Mockstore
        taskboxState={{
          ...MockedState,
          tasks: [],
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
  },
} satisfies StoryObj<typeof TaskList>;