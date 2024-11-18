
import React from 'react';
import { Task } from './Task';
import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

const meta = {
  title: 'Atoms/Task',
  component: Task,
  argTypes: {
    onPinTask: { action: 'onPinTask' },
    onArchiveTask: { action: 'onArchiveTask' },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: 'flex-start' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Task>;

export default meta
export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: { task: { ...Default.args.task, state: 'TASK_PINNED' } },
};

export const Archived = {
  args: { task: { ...Default.args.task, state: 'TASK_ARCHIVED' } },
};