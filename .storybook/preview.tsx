import type {Preview} from '@storybook/react';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {UnistylesRuntime} from 'react-native-unistyles';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {name: 'dark', value: 'black'},
        {name: 'light', value: 'white'},
      ],
    },
  },
  decorators: [
    Story => {
      return (
        <SafeAreaView style={{flex: 1, padding: 20}}>
          <TouchableOpacity
            style={{backgroundColor: 'red', margin: 10}}
            onPress={() => {
              if (UnistylesRuntime.themeName === 'light') {
                UnistylesRuntime.setTheme('dark');
              } else {
                UnistylesRuntime.setTheme('light');
              }
            }}>
            <Text>
              Change to{' '}
              {UnistylesRuntime.themeName === 'light' ? 'dark' : 'light'} Theme
            </Text>
          </TouchableOpacity>

          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          <Story />
        </SafeAreaView>
      );
    },
    withBackgrounds,
  ],
};

export default preview;
