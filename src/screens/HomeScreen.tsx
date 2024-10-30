import React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import {decrement, ICounterState, increment, incrementByAmount} from '../redux/slices/counterSlice';
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../redux/store';

const HomeScreen = () => {
  const count = useSelector((state: RootState)=> state.counter.value);

  const dispatch = useDispatch();

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 100,}}>Home Screen</Text>
      <View style={{height: 20}} />
      <TouchableOpacity onPress={()=>{dispatch(increment())}}>
        <Text>+1</Text>
      </TouchableOpacity>
      <View style={{height: 20}} />
      <Text>{`count = ${count}`}</Text>
      <View style={{height: 20}} />
      <TouchableOpacity
        onPress={() => {
          dispatch(decrement());
        }}>
        <Text>-1</Text>
      </TouchableOpacity>
      <View style={{height: 20}} />
      <TouchableOpacity
        onPress={() => {
          dispatch(incrementByAmount(10));
        }}>
        <Text>+10</Text>
      </TouchableOpacity>
      {/* <View style={{width: 200, height: 200, backgroundColor: "yellow"}}>
          <IconLeftArrow  color="green" width={100} height={200}/>
        </View> */}
    </SafeAreaView>
  );
}
export default HomeScreen;
