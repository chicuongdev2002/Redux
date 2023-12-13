import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import store, { cong,tru,nhan,chia } from './ReduxCTNC';

export default function Name({ navigation }) {
  const [input, setInput] = useState('0');
  const [result, setResult] = useState(() => store.getState().result || 0);

  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => {
  //     setResult(store.getState().result);
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <View>
      <TextInput
        placeholder='Nhập số'
        value={input}
        onChangeText={(text) => setInput(text)}
        keyboardType='numeric'
      />
      <Text>Result: {result}</Text>
      <Button
        title='CỘNG'
        onPress={() => {
          const inputValue = parseFloat(input);
          store.dispatch(cong(inputValue));
        setResult(store.getState().result);
        }}
      />
       <Button
        title='TRỪ'
        onPress={() => {
          const inputValue = parseFloat(input);
          store.dispatch(tru(inputValue));
        setResult(store.getState().result);
        }}
      />
       <Button
        title='NHÂN'
        onPress={() => {
          const inputValue = parseFloat(input);
          store.dispatch(nhan(inputValue));
        setResult(store.getState().result);
        }}
      />
       <Button
        title='CHIA'
        onPress={() => {
          const inputValue = parseFloat(input);
          store.dispatch(chia(inputValue));
        setResult(store.getState().result);
        }}
      />
    </View>
  );
}
