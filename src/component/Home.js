import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable, FlatList, TouchableOpacity, TextInput, ImageBackground, Button } from "react-native";
import axios from 'axios';

function Home({ navigation }) {
  const [todo, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState(null);

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
      const res = await axios.delete(`https://6540a53a45bedb25bfc23dad.mockapi.io/todo/${id}`);
      if (res.data) {
        fetchTodo();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = async () => {
    try {
      const res = await axios.post('https://6540a53a45bedb25bfc23dad.mockapi.io/todo', { name });
      if (res.data) {
        fetchTodo();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePut = async (obj, id) => {
    try {
      const res = await axios.put(`https://6540a53a45bedb25bfc23dad.mockapi.io/todo/${id}`, obj);
      if (res.data) {
        fetchTodo();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <View>
      <Text>TODO APP API</Text>
      {todo.map((item) => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Button
            title="DELETE"
            onPress={() => { handleDelete(item.id) }}
          >DELETE</Button>
          <Button
            title="EDIT"
            onPress={() => {
              setName(item.name);
              setEdit(item.id);
            }}
          >EDIT</Button>
        </View>
      ))}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Nhập name todo"
        value={name}
        onChangeText={setName}
      />
      <Button
        onPress={handleAdd}
        title={"ADD"}
      />
       <Button
        onPress={handlePut({name},edit)}
        title={"EDIT"}
      />
    </View>
  );
}

export default Home;
