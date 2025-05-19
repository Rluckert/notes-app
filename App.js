import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [state, setState] = useState({
    text: "",
    toDoList: [],
  });

  const onChangeText = (text) => {
    setState(prev => ({
      ...prev,
      text: text,
    }));
  };

  const addTodoList = () => {
    if (state.text.trim() === "") return;
    setState(prev => ({
      ...prev,
      toDoList: [...prev.toDoList, prev.text],
      text: "",
    }));
  };

  const deleteItemTodoList = (index) => {
    setState(prev => ({
      ...prev,
      toDoList: prev.toDoList.filter((_, i) => i !== index),
    }));
  }

  const renderToDoList = () => {
    return state.toDoList.map((item, index) => (
      <Text key={index} style={styles.textStyle} onPress={() => deleteItemTodoList(index)}>{item}</Text>
    ));
  };

  return (
    <View style={styles.wholeStyle}>
      <View style={styles.container}>
      <Text style={styles.header}>- Notes App -</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Type here to add!"
        value={state.text}
        onChangeText={onChangeText}
      />
      <Button
        backgroundColor="green"
        color={"green"}
        title="Add to do list"
        onPress={addTodoList}
      />
      {renderToDoList()}
      <StatusBar style="auto" />
       </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    height: '100%',
  },
  wholeStyle: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',  
  },
  inputStyle: {
    width: '90%',
    height: 40,
    borderColor: 'green',
    borderWidth: 1,
    marginBottom: 20,
    color: 'black',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green',
  },
  textStyle: { 
    color: 'green',
    fontSize: 20,
    marginBottom: 5,   
    padding: 5
  },
  
});
