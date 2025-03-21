import {useAppSelector} from '#hooks/AppHooks';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const AboutScreen = (): React.JSX.Element => {
  const isSignedIn = useAppSelector(state => state.login.isSignedIn);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>{`AboutScreen ${isSignedIn ? 'user' : 'guest'}`}</Text>
    </SafeAreaView>
  );
};

export default AboutScreen;
