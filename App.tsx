/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IconLeftArrow from './src/assets/icons/ic_left_arrow.svg';
import { SvgUri } from 'react-native-svg';
import { Provider } from 'react-redux'
import { store } from './src/redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './src/redux/slices/counterSlice';

function HomeScreen() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <View style={{height: 20}}/>
      <TouchableOpacity onPress={()=>{dispatch(increment())}}>
        <Text>+1</Text>
      </TouchableOpacity>
      <View style={{height: 20}}/>
      <Text>{`count = ${count}`}</Text>
      <View style={{height: 20}}/>
      <TouchableOpacity onPress={()=>{dispatch(decrement())}}>
        <Text>-1</Text>
      </TouchableOpacity>
      <View style={{height: 20}}/>
      <TouchableOpacity onPress={()=>{dispatch(incrementByAmount(10))}}>
        <Text>+10</Text>
      </TouchableOpacity>
      <View style={{width: 200, height: 200, backgroundColor: "yellow"}}>
        <IconLeftArrow  color="green" width={100} height={200}/>

      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
