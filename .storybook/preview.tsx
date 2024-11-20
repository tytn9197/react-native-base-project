import type {Preview} from '@storybook/react';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {name:'dark', value: 'black'},
        {name:'light', value: 'white'},
      ]
    }
  },
  decorators: [
    Story => (
      <SafeAreaView style={{flex: 1, padding: 20}}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </SafeAreaView>
    ),
    withBackgrounds
  ],
};

export default preview;
