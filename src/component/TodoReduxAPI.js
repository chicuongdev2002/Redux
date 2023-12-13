import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, deleteTodo, fetchTodos } from './ReduxAPI'; // Adjust the path as needed

export default function TodoReduxAPI() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  const [edit, setEdit] = useState({ job: '', id: null });
  const [todo, setTodo] = useState('');

  useEffect(() => {
    dispatch(fetchTodos()); // Fetch initial data when the component mounts
  }, []);

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), todo }));
      setTodo('');
    }
  };

  const handleUpdateTodo = () => {
    if (edit.id !== null && edit.job.trim() !== '') {
      dispatch(updateTodo(edit.id, edit.job));
      setEdit({ job: '', id: null });
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <View>
      <TextInput
        placeholder='Nhập công việc'
        value={todo}
        onChangeText={setTodo}
        style={{ height: 40, borderWidth: 1 }}
      />
      <Button title='Thêm công việc' onPress={handleAddTodo} />
      <TextInput
        placeholder='Nhập công việc cần sửa'
        value={edit.job}
        onChangeText={(text) => setEdit({ ...edit, job: text })}
        style={{ height: 40, borderWidth: 1 }}
      />
      <Button title='Cập nhật công việc' onPress={handleUpdateTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ borderWidth: 1 }} key={item.id}>
            <Text>{item.todo}</Text>
            <Button title='Xóa' onPress={() => handleDeleteTodo(item.id)} />
            <Button title='Sửa' onPress={() => setEdit({ job: item.todo, id: item.id })} />
          </View>
        )}
      />
    </View>
  );
}