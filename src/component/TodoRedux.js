import { useEffect, useState } from 'react';
import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
import store from './Redux.js';
import { addTodo } from './Redux.js';
import {updateTodo} from './Redux.js';
import { axios } from 'axios';
export default function ReduxTodo({navigation}) {
    const[edit,setEdit]=useState({job:"",id:null})
    const[todo,setTodo]=useState("")
    const[todos,setTodos]=useState(()=>{
return store.getState()
}
    )
  return (
    <View>
    <TextInput
    placeholder='nhap cong viec'
    value={todo}
    onChangeText={setTodo}
    style={{height:40,borderWidth:1}}
    />
      <TextInput
    placeholder='nhap cong viec can sua'
    value={edit.job}
    onChangeText={(e)=>{setEdit({...edit,job:e})}}
    style={{height:40,borderWidth:1}}
  />
  <Button
  title='ADD'
  onPress={()=>{
    store.dispatch(addTodo({id:Date.now(),todo}))
 setTodos(store.getState());
}}
  >
  </Button>
  <Button
  title='DONE EDIT'
  onPress={()=>{
    store.dispatch(updateTodo(edit.job,edit.id))
 setTodos(store.getState());
}}
  >
  </Button>
    {todos.map((todo)=>(
        <View style={{borderWidth:1}} key={todo.id}>
 <Text>{todo.todo}</Text>
 <Button 
 title='REMOVE'
onPress={()=>{
    store.dispatch({type:"DELETE",payload:todo.id})
    setTodos(store.getState());
}}>
 </Button>
 <Button 
 title='EDIT'
onPress={()=>{
    setEdit({job:todo.todo,id:todo.id})
}}>
 </Button>
        </View>
   ))}
    </View>
  );
}