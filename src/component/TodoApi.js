import React,{useEffect, useState} from 'react';
import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
import axios from 'axios';
export default function TodoApi({navigation}) {
    const[todo,setTodos]=useState([]);
    const[name,setName]=useState('');
const[editIdid,setEditId]=useState(null);

    const fetchTodo = async () => {
      try {
        const res = await axios.get('https://6540a53a45bedb25bfc23dad.mockapi.io/todo');
        if (res.data) {
          setTodos(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    const handleDelete = async (id) => {
      try {
        const res = await axios.delete('https://6540a53a45bedb25bfc23dad.mockapi.io/todo/'+id);
        if (res.data) {
          fetchTodo();
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    const handleAdd = async () => {
      try {
        const res = await axios.post('https://6540a53a45bedb25bfc23dad.mockapi.io/todo', {name});
        if (res.data) {
          fetchTodo();
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    const handlePut = async (obj,id) => {
      try {
        const res = await axios.put(`https://6540a53a45bedb25bfc23dad.mockapi.io/todo/${id}`, obj);
        if (res.data) {
          fetchTodo();
        }
      } catch (error) {
        console.log(error);
      }
    };
useEffect(()=>{
    fetchTodo();
},[]);
  return (
    <View>
        <Text>TODO API</Text>
        {todo.map((item)=>(
               <View key={item.id}>
                <Text>{item.name}</Text>
                <Button 
        title='DELETE'
        onPress={()=>handleDelete(item.id)}
        ></Button>
              <Button 
        title='EDIT'
       onPress={()=>{
        setEditId(item.id),
setName(item.name)}}
        ></Button>
               </View>  
        ))}
        <TextInput  
        placeholder='Nhập name todo'
        value={name}
        onChangeText={setName}
        />
        <Button 
        title='ADD'
        onPress={handleAdd}
        ></Button>
                <Button 
        title='DONE EDIT'
        onPress={handlePut({name},editIdid)}
        ></Button>
    </View>
  );
        }
